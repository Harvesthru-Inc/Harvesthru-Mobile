import React from 'react';
import {
  View,
  Dimensions,
  Animated,
  StyleSheet,
  PanResponder,
  Text,
  Keyboard,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import HomeTextInput from '~/components/TextInputs/HomeTextInput';
import Rating from '~/components/Rating';
import Loading from '~/screens/Loading';

// Define scroll levels
const MAX_SCROLL_HEIGHT =
  Dimensions.get('window').height - getStatusBarHeight();
const DEFAULT_SCROLL_HEIGHT = 440;
const MIN_SCROLL_HEIGHT = 150;
const SMOOTH_FACTOR = 1.0;

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    // Set state
    this.state = {
      loading: true,
      homeInputText: '',
      farms: [],
    };

    // Animated values to handle scroll menu height
    this.previousHeight = new Animated.Value(DEFAULT_SCROLL_HEIGHT);
    this.currentHeight = new Animated.Value(DEFAULT_SCROLL_HEIGHT);
    this.heightOffset = new Animated.Value(0);

    // Set pan responder to listen for screen interactions
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: event => {
        // Set height offset to 0
        this.heightOffset.setValue(0);

        // Dismiss keyboard
        Keyboard.dismiss();
      },
      onPanResponderMove: (event, gesture) => {
        // Calculate height offset
        const initialY = gesture.y0;
        const newY = gesture.moveY;
        const offset = -(newY - initialY) * SMOOTH_FACTOR;
        this.heightOffset.setValue(offset);

        // Calculate new scroll height
        const newHeight = this.previousHeight._value + offset;

        // Maintain MAX/MIN sticky scroll position
        if (newHeight >= MAX_SCROLL_HEIGHT) {
          this.currentHeight.setValue(MAX_SCROLL_HEIGHT);
        } else if (newHeight <= MIN_SCROLL_HEIGHT) {
          this.currentHeight.setValue(MIN_SCROLL_HEIGHT);
        } else {
          this.currentHeight.setValue(newHeight);
        }
      },
      onPanResponderRelease: (event, gesture) => {
        // Handle release interaction
        const offset = this.heightOffset._value;
        const height = this._handleRelease(offset);

        // Bounce to height
        this._bounceToHeight(height);
      },
    });

    // fetch farms data
    this.getFarms();
  }

  // Get list of all farms
  getFarms = () => {
    // Get auth token
    const authToken = this.props.navigation.getParam('authToken');

    // Get fetch options
    const options = {
      headers: {'x-auth-token': authToken},
    };

    // Get all farms
    axios
      .get('/api/farm/all_data', options)
      // Log response
      .then(response => {
        if (response && response.data && response.data.farms) {
          this.setState({farms: response.data.farms, loading: false});
        }
      })
      // Log error
      .catch(error => {
        console.log(error.response);
      });
  };

  // Make scroll menu jump to specified height
  _bounceToHeight = height => {
    this.previousHeight.setValue(height);
    Animated.spring(this.currentHeight, {
      toValue: height,
      overshootClamping: true,
      speed: 8,
      useNativeDriver: false,
    }).start();
  };

  // Handle responder release
  _handleRelease = offset => {
    // Get new height of scroll menu
    const temp = this.previousHeight._value + offset;

    // Get scroll direction
    const direction = offset <= 0;

    // Max scroll height
    if (temp >= MAX_SCROLL_HEIGHT) {
      return MAX_SCROLL_HEIGHT;
    }

    // Between default and max, check scroll direction
    if (temp >= DEFAULT_SCROLL_HEIGHT && temp < MAX_SCROLL_HEIGHT) {
      return direction ? DEFAULT_SCROLL_HEIGHT : MAX_SCROLL_HEIGHT;
    }

    // Between min and default
    if (temp >= MIN_SCROLL_HEIGHT && temp < DEFAULT_SCROLL_HEIGHT) {
      return direction ? MIN_SCROLL_HEIGHT : DEFAULT_SCROLL_HEIGHT;
    }

    // Min scroll height
    if (temp < MIN_SCROLL_HEIGHT) {
      return MIN_SCROLL_HEIGHT;
    }
  };

  // Render farm item
  renderFarmItem = ({item, index}) => {
    // Check num listings
    const numListings = item.listings ? item.listings.length : 0;

    // Get farm id
    const farmId = item._id;
    const authToken = this.props.navigation.getParam('authToken');

    // Navigate to farm
    const navigateToFarm = () => {
      this.props.navigation.navigate('Farm', {farmId, authToken});
    };

    return (
      <TouchableOpacity
        style={[styles.farm, {width: Dimensions.get('window').width * 0.8}]}
        onPress={navigateToFarm}>
        <Text style={styles.farmText}>
          {index + 1}. {item.title}
        </Text>
        <View style={styles.farmDetails}>
          <Rating rating={item.rating} />
          <Text style={styles.farmTags}>{item.tags.join(', ')}</Text>
          <View style={styles.farmListingImages}>
            {numListings > 0 ? (
              item.listings.map(listing => (
                <Image
                  key={listing._id}
                  style={styles.farmListingImage}
                  source={listing.coverPhoto ? {uri: listing.coverPhoto} : {}}
                />
              ))
            ) : (
              <Text>No Images to be shown!</Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    // Get handles for pan handler
    const handles = this.panResponder.panHandlers;

    // Home text input parameters
    const placeholder = 'Explore fresh produce near you';

    // Get value of input text
    const value = this.state.homeInputText;

    // Set input text
    const setText = text => this.setState({homeInputText: text});

    // If pressed input, open to max height
    const onPress = () => {
      this._bounceToHeight(MAX_SCROLL_HEIGHT);
    };

    // Submit home text input
    const onSubmit = () => console.log(this.state.homeInputText);

    // If loading, return loading screen
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <View style={styles.container}>
        <MapView style={styles.map} provider={PROVIDER_GOOGLE} />
        <Animated.View
          {...handles}
          style={[styles.scrollMenu, {height: this.currentHeight}]}>
          <View style={styles.pullTab} />
          <Text style={styles.title}>Hi, Emily!</Text>
          <HomeTextInput
            placeholder={placeholder}
            value={value}
            setText={setText}
            onPress={onPress}
            onSubmit={onSubmit}
          />
          <FlatList
            keyExtractor={a => a._id}
            style={styles.farmList}
            renderItem={this.renderFarmItem}
            data={this.state.farms}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    flex: 1,
  },

  scrollMenu: {
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowColor: '#E4E4E4',
    shadowRadius: 3,
    shadowOpacity: 0.5,
  },

  pullTab: {
    height: 4,
    width: 40,
    backgroundColor: '#D4D4D4',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 8,
  },

  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: 18,
    width: '100%',
    paddingLeft: 19,
    paddingTop: 9,
  },

  farmList: {
    flex: 1,
    alignSelf: 'center',
  },

  farm: {
    backgroundColor: 'white',
    marginHorizontal: 17,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowOpacity: 0.5,
    shadowColor: '#E4E4E4',
    shadowRadius: 8,
    borderRadius: 10,
    borderWidth: 0.25,
    borderColor: '#E4E4E4',
    padding: 11,
  },

  farmDetails: {
    marginHorizontal: 20,
    marginTop: 5,
    flex: 1,
  },

  farmText: {
    fontFamily: 'Nunito',
    fontSize: 15,
    lineHeight: 20,
  },

  farmTags: {
    fontFamily: 'Nunito',
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '300',
  },

  farmListingImages: {
    flex: 1,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  farmListingImage: {
    height: 60,
    width: 80,
    borderRadius: 4,
    marginRight: 25,
    borderColor: 'gray',
    borderWidth: 0.25,
  },
});

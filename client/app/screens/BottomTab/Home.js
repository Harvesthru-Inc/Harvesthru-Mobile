import React from 'react';
import {
  View,
  Dimensions,
  Animated,
  StyleSheet,
  PanResponder,
  Text,
  Keyboard,
} from 'react-native';
import MapView from 'react-native-maps';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import HomeTextInput from '~/components/TextInputs/HomeTextInput';

// Define scroll levels
const MAX_SCROLL_HEIGHT =
  Dimensions.get('window').height - getStatusBarHeight();
const DEFAULT_SCROLL_HEIGHT = 220;
const MIN_SCROLL_HEIGHT = 55;
const SMOOTH_FACTOR = 1.0;

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    // Set state
    this.state = {
      homeInputText: '',
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
  }

  // Make scroll menu jump to specified height
  _bounceToHeight = height => {
    this.previousHeight.setValue(height);
    Animated.spring(this.currentHeight, {
      toValue: height,
      overshootClamping: true,
      speed: 8,
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

  render() {
    // Get handles for pan handler
    const handles = this.panResponder.panHandlers;

    // Home text input parameters
    const placeholder = 'Explore fresh produce near you';
    const value = this.state.homeInputText;
    const setText = text => this.setState({homeInputText: text});
    const onPress = () => {
      console.log('gi');
      this._bounceToHeight(MAX_SCROLL_HEIGHT);
    };
    const onSubmit = () => console.log(this.state.homeInputText);

    return (
      <View style={styles.container}>
        <MapView style={styles.map} />
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
});

import React from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TextInput,
  FlatList,
} from 'react-native';
import Header from '../components/Header';
import {Images} from '../assets/images';
import ListItem from '../components/ListItem';

// Temp data
const data = [
  {
    id: '3123',
    title: 'Apples',
    quantity: 4,
    units: 'basket',
    price: 5,
    image: Images.fruitsBasket,
  },
  {
    id: '3143',
    title: 'Apples',
    quantity: 4,
    units: 'basket',
    price: 5,
    image: Images.fruitsBasket,
  },
  {
    id: '3113',
    title: 'Apples',
    quantity: 4,
    units: 'basket',
    price: 5,
    image: Images.fruitsBasket,
  },
  {
    id: '3133',
    title: 'Apples',
    quantity: 4,
    units: 'basket',
    price: 5,
    image: Images.fruitsBasket,
  },
  {
    id: '3193',
    title: 'Apples',
    quantity: 4,
    units: 'basket',
    price: 5,
    image: Images.fruitsBasket,
  },
];

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingSelected: true,
      reviewSelected: false,
      postSelected: false,
    };
  }

  highlightCategory = category => {
    if (category === 'listings')
      return this.setState({
        listingSelected: true,
        reviewSelected: false,
        postSelected: false,
      });
    if (category === 'reviews')
      return this.setState({
        listingSelected: false,
        reviewSelected: true,
        postSelected: false,
      });
    if (category === 'posts')
      return this.setState({
        listingSelected: false,
        reviewSelected: false,
        postSelected: true,
      });
  };

  render() {
    const {listingSelected, reviewSelected, postSelected} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Header
          centerIcon={true}
        />
        <View style={styles.topSection}>
          <View style={styles.userDetails}>
            <Image
              style={styles.userProfileImage}
              source={Images.profilePlaceholder}></Image>
            <View style={styles.userInfo}>
              <Text style={styles.userRealName}>Mister Sun</Text>
              <Text style={styles.userHandle}>@mistersun1</Text>
              <Text style={styles.userDateAndLocation}>
                Joined March 2019 | San Diego, CA
              </Text>
              <View style={styles.userFollows}>
                <Text style={styles.userFollowsText}>5 Following</Text>
                <Text style={styles.userFollowsText}>10 Followers</Text>
              </View>
            </View>
          </View>
          <Text style={styles.userBio}>
            Naturally Grown. Healthy Lifestyle!
          </Text>
        </View>
        <View style={styles.categories}>
          <TouchableWithoutFeedback
            onPress={() => this.highlightCategory('listings')}>
            <View
              style={[
                styles.categoryBorder,
                listingSelected && {borderBottomColor: 'white'},
              ]}>
              <Text
                style={
                  listingSelected
                    ? styles.highlightCategoryText
                    : styles.categoryText
                }>
                My Listings
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => this.highlightCategory('reviews')}>
            <View
              style={[
                styles.categoryBorder,
                {borderLeftColor: 0, borderRightWidth: 0},
                reviewSelected && {borderBottomColor: 'white'},
              ]}>
              <Text
                style={
                  reviewSelected
                    ? styles.highlightCategoryText
                    : styles.categoryText
                }>
                Reviews
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => this.highlightCategory('posts')}>
            <View
              style={[
                styles.categoryBorder,
                postSelected && {borderBottomColor: 'white'},
              ]}>
              <Text
                style={
                  postSelected
                    ? styles.highlightCategoryText
                    : styles.categoryText
                }>
                Posts
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <TextInput style={styles.searchBar}></TextInput>
        <View style={styles.flatListContainer}>
          <FlatList
            data={data}
            renderItem={({item}) => <ListItem {...item} />}
            keyExtractor={item => item.id}
            style={styles.itemsList}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topSection: {
    marginHorizontal: 26,
  },

  userDetails: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginTop: 70,
  },

  userProfileImage: {
    height: 118,
    width: 118,
    borderRadius: 59,
  },

  userInfo: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingLeft: 20,
  },

  userRealName: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 24,
    lineHeight: 30,
    color: '#4A4A4A',
  },

  userHandle: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    lineHeight: 17,
    color: '#000000',
  },

  userDateAndLocation: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    lineHeight: 15,
    color: '#8C8C8C',
  },

  userFollows: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  userFollowsText: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    lineHeight: 15,
    color: 'black',
    marginRight: 10,
  },

  userBio: {
    fontFamily: 'Montserrat',
    fontSize: 12,
    lineHeight: 15,
    color: 'black',
    marginTop: 45,
  },

  categories: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  categoryBorder: {
    borderWidth: 1,
    borderColor: '#DADADA',
    height: 43,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryText: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    lineHeight: 17,
    color: '#979797',
  },

  highlightCategoryText: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    lineHeight: 17,
    color: '#9ACD00',
  },

  searchBar: {
    borderWidth: 1,
    borderColor: '#DADADA',
    borderRadius: 10,
    marginVertical: 20,
    height: 32,
    padding: 5,
    marginHorizontal: 26,
  },

  flatListContainer: {
    flex: 1,
  },

  itemsList: {
    borderTopWidth: 1,
    borderColor: '#DADADA',
  },
});

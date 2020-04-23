import React from 'react';
import {View, Dimensions, Animated} from 'react-native';
import MapView from 'react-native-maps';
import HomeStyles from 'app/assets/stylesheets/HomeStyles';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default class Home extends React.Component {
  constructor(props) {
    this.previousHeight = Animated.Value(MIN_SCROLL_HEIGHT);
    this.currentHeight = Animated.Value(MIN_SCROLL_HEIGHT);
    this.heightOffset = Animated.Value(0);

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: event => {
        this.heightOffset.setValue(0);
      },
      onPanResponderMove: (event, gesture) => {
        const initialY = gesture.y0;
        const newY = gesture.moveY;
        const offset = -(newY - initialY) * SMOOTH_FACTOR;

        this.heightOffset.setValue(offset);
        const newHeight = this.previousHeight._value + offset;

        if (newHeight >= MAX_SCROLL_HEIGHT) {
          this.currentHeight.setValue(MAX_SCROLL_HEIGHT);
        } else if (newHeight <= DEFAULT_SCROLL_HEIGHT) {
          this.currentHeight.setValue(DEFAULT_SCROLL_HEIGHT);
        } else {
          this.currentHeight.setValue(newHeight);
        }
      },
      onPanResponderRelease: (event, gesture) => {
        const temp = this.previousHeight._value + this.heightOffset._value;
        const MAX_SCROLL_HEIGHT = Dimensions.get('window').height;

        if (temp >= MAX_SCROLL_HEIGHT) {
          this.previousHeight.setValue(MAX_SCROLL_HEIGHT);
        } else if (temp <= DEFAULT_SCROLL_HEIGHT) {
          this.previousHeight.setValue(DEFAULT_SCROLL_HEIGHT);
        } else {
          this.previousHeight.setValue(temp);
        }
      },
    });
  }

  render() {
    return (
      <View>
        <MapView style={HomeStyles.container} />
      </View>
    );
  }
}

const MIN_SCROLL_HEIGHT = 40;
const MAX_SCROLL_HEIGHT =
  Dimensions.get('window').height - getStatusBarHeight();

import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Images} from '~/assets/images';

// Fill array with initial values
const fillArray = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

// Rating component
const Rating = ({rating}) => (
  <View style={styles.starRow}>
    {fillArray(Math.floor(rating)).map(r => (
      <Image key={r} source={Images.starYellow} />
    ))}
    {fillArray(5 - Math.floor(rating)).map(r => (
      <Image key={r} source={Images.starGray} />
    ))}
  </View>
);

export default Rating;

const styles = StyleSheet.create({
  starRow: {
    flexDirection: 'row',
  },
});

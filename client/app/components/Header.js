import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Images} from '../assets/images';

const HEADER_HEIGHT = 80;

const Header = ({goBack}) => {
  return (
    <View style={[styles.headerStyle, {height: HEADER_HEIGHT}]}>
      <TouchableOpacity onPress={goBack}>
        <Image source={Images.backArrow} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    position: 'absolute',
    top: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
});

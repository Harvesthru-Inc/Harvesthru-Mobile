import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {Images} from '~/assets/images';

const HEADER_HEIGHT = 80;

const Header = ({goBack, centerIcon}) => {
  return (
    <View style={[styles.headerStyle, {height: HEADER_HEIGHT}, centerIcon && {justifyContent: 'center'}]}>
      {goBack && (
        <TouchableOpacity onPress={goBack}>
          <Image source={Images.backArrow} />
        </TouchableOpacity>
      )}
      {centerIcon && (
        <Image style={styles.centerIcon} source={Images.headerIcon}></Image>
      )}
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  centerIcon: {
    marginRight: 20,
  },
});

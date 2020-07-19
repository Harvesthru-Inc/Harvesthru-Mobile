import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import {Images} from '~/assets/images';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const HEADER_HEIGHT = 80;

const Header = ({goBack, centerIcon}) => {
  return (
    <View
      style={[
        styles.headerStyle,
        {height: HEADER_HEIGHT},
        centerIcon && {justifyContent: 'center'},
      ]}>
      {goBack && (
        <TouchableOpacity onPress={goBack}>
          <Image source={Images.backArrow} />
        </TouchableOpacity>
      )}
      {centerIcon && (
        <Image style={styles.centerIcon} source={Images.headerIcon} />
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerStyle: {
    position: 'absolute',
    top: getStatusBarHeight(),
    left: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  centerIcon: {
    marginRight: 20,
  },
});

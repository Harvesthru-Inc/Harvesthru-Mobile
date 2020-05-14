import React from 'react';
import {View, Image, StyleSheet, TextInput} from 'react-native';
import {Images} from '../../assets/images';

const MyTextInput = ({text, contentWidth, type}) => {
  return (
    <View style={[styles.authTextInput, {width: contentWidth}]}>
      <TextInput
        secureTextEntry={type === 'password'}
        style={[styles.passInput, {width: type === 'password' ? contentWidth - 14 : contentWidth}]}
        placeholder={text}
      />
      {type === 'password' && <Image source={Images.hidePasswordIcon}></Image>}
    </View>
  );
};

const styles = StyleSheet.create({
  authTextInput: {
    fontFamily: 'Quicksand-Bold',
    fontStyle: 'normal',
    flexDirection: 'row',
    fontSize: 14,
    lineHeight: 17,
    color: '#999898',
    borderBottomWidth: 2,
    borderBottomColor: '#E5E5E5',
    height: 40,
    marginTop: 25,
    textAlignVertical: 'bottom',
    justifyContent: 'space-between',
    letterSpacing: 0.2,
    alignItems: 'center',
  },

  passInput: {
    fontFamily: 'Quicksand-Bold',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MyTextInput;

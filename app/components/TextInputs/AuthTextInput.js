import React from 'react';
import {View, Image, StyleSheet, TextInput} from 'react-native';
import {Images} from '~/assets/images';

const AuthTextInput = ({text, contentWidth, type, value, onChange}) => {
  return (
    <View style={[styles.authTextInput, {width: contentWidth}]}>
      <TextInput
        secureTextEntry={type === 'password'}
        onChangeText={onChange}
        style={[
          styles.passInput,
          {width: type === 'password' ? contentWidth - 14 : contentWidth},
        ]}
        placeholder={text}
      />
      {type === 'password' && <Image source={Images.hidePasswordIcon} />}
    </View>
  );
};

const styles = StyleSheet.create({
  authTextInput: {
    fontFamily: 'Nunito-Bold',
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
    fontFamily: 'Nunito-Bold',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AuthTextInput;

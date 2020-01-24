import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const NextButton = ({text, extraStyles, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress || null}
      style={[styles.nextBtn, extraStyles]}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  nextBtn: {
    backgroundColor: '#9ACD00',
    borderRadius: 24,
    paddingHorizontal: 45.5,
    paddingVertical: 13.5,
  },

  buttonText: {
    fontSize: 18,
    fontFamily: 'Quicksand-Bold',
    fontStyle: 'normal',
    lineHeight: 22,
    textAlign: 'center',
    color: '#ffffff',
  },
});

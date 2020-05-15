import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Images} from '~/assets/images';

// Home Text Input
const HomeTextInput = ({placeholder, value, setText, onPress, onSubmit}) => {
  return (
    <View style={styles.inputContainer}>
      <Image style={styles.homeSearchIcon} source={Images.homeSearchIcon} />
      <TextInput
        onSubmitEditing={onSubmit}
        onFocus={onPress}
        style={styles.homeTextInput}
        value={value}
        placeholder={placeholder}
        onChangeText={setText}
      />
    </View>
  );
};

// Define constant input height
const TEXT_INPUT_HEIGHT = 32;

const styles = StyleSheet.create({
  inputContainer: {
    height: TEXT_INPUT_HEIGHT,
    borderWidth: 1,
    borderColor: '#9ACD00',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 8,
    shadowColor: '#EEEEEE',
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: 'white',
    width: '85%',
    alignSelf: 'center',
    marginVertical: TEXT_INPUT_HEIGHT / 2,
    flexDirection: 'row',
    alignItems: 'center',
  },

  homeTextInput: {
    height: TEXT_INPUT_HEIGHT,
    width: '100%',
    fontFamily: 'Nunito',
    textAlignVertical: 'center',
    fontSize: 12,
    color: 'black',
  },

  homeSearchIcon: {
    height: 12,
    width: 12,
    marginHorizontal: TEXT_INPUT_HEIGHT / 2,
  },
});

export default HomeTextInput;

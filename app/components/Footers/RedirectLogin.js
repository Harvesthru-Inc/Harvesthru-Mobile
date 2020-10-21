import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const RedirectLogin = ({navigation, login}) => {
  return (
    <View style={styles.redirectLogin}>
      <Text style={styles.loginText}>
        {!login ? 'Already have an account? ' : "Don't have an account? "}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(!login ? 'Login' : 'Signup')}>
        <Text style={styles.loginTextBold}>
          {!login ? 'Log In!' : 'Sign Up!'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const TEXT_INPUT_WIDTH = 290;

export default RedirectLogin;

const styles = StyleSheet.create({
  redirectLogin: {
    flexDirection: 'row',
    width: TEXT_INPUT_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
  },

  loginText: {
    fontFamily: 'Nunito-Regular',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
  },

  loginTextBold: {
    fontFamily: 'Nunito-Bold',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
  },
});

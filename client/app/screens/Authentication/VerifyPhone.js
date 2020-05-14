import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from '../../components/Headers/Header';
import NextButton from '../../components/Buttons/NextButton';

const TEXT_INPUT_WIDTH = 290;

export default class VerifyPhone extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header goBack={() => this.props.navigation.goBack()} />
        <Text style={styles.genericTitle}>Verification</Text>
        <Text style={styles.helpText}>Please enter your 4-digit code</Text>
        <View style={styles.codeInputRow}>
          <TextInput style={styles.codeInputBox} />
          <TextInput style={styles.codeInputBox} />
          <TextInput style={styles.codeInputBox} />
          <TextInput style={styles.codeInputBox} />
        </View>
        <Text style={[styles.helpText, {textAlign: 'center', marginTop: 30}]}>
          Didn't receive your code?
        </Text>
        <Text
          style={[
            styles.helpText,
            {textAlign: 'center', marginTop: 5, color: 'red'},
          ]}>
          Resend Now
        </Text>
        <NextButton
          text={'TO HOME'}
          onPress={() => this.props.navigation.navigate('Main')}
          extraStyles={{marginTop: 40}}
        />
        <View style={styles.redirectLogin}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.loginTextBold}>Log In!</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  genericTitle: {
    fontFamily: 'Quicksand-Bold',
    fontStyle: 'normal',
    fontSize: 30,
    lineHeight: 45,
    color: '#9ACD00',
    marginBottom: 10,
    textAlign: 'left',
    width: TEXT_INPUT_WIDTH,
  },

  helpText: {
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 15,
    width: TEXT_INPUT_WIDTH,
    textAlign: 'left',
    color: '#A5A5A5',
  },

  btnStyles: {
    marginTop: 90,
  },

  redirectLogin: {
    flexDirection: 'row',
    width: TEXT_INPUT_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
  },

  loginText: {
    fontFamily: 'Quicksand-Regular',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
  },

  loginTextBold: {
    fontFamily: 'Quicksand-Bold',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
  },

  codeInputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  codeInputBox: {
    width: 59,
    height: 68,
    borderRadius: 10,
    backgroundColor: '#DFDFDF',
    marginHorizontal: 8,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30,
  },
});

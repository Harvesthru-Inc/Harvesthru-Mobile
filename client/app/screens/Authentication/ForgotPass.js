import React from 'react';
import {Text, SafeAreaView, StyleSheet, View, TouchableOpacity} from 'react-native';
import NextButton from '~/components/Buttons/NextButton';
import MyTextInput from '~/components/TextInputs/MyTextInput';
import Header from '~/components/Headers/Header';

const TEXT_INPUT_WIDTH = 290;

export default class ForgotPass extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header goBack={() => this.props.navigation.goBack()} />
        <Text style={styles.genericTitle}>Forgot Password?</Text>
        <Text style={styles.helpText}>Enter your email or phone number and we’ll send you a link to reset your password!</Text>
        <MyTextInput contentWidth={TEXT_INPUT_WIDTH} text='Email or Phone Number' type="name" />
        <NextButton text={'SEND'} extraStyles={styles.btnStyles} />
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
    letterSpacing: 0.1,
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
    marginTop: 130,
  },
});

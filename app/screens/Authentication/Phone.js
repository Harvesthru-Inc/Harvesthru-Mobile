import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import NextButton from '~/components/Buttons/NextButton';
import AuthTextInput from '~/components/TextInputs/AuthTextInput';
import RedirectLogin from '~/components/Footers/RedirectLogin';

const TEXT_INPUT_WIDTH = 290;

export default class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.genericTitle}>Phone Number</Text>
        <Text style={styles.helpText}>
          Enter your phone number and we will send you 4-digit code
        </Text>
        <AuthTextInput
          contentWidth={TEXT_INPUT_WIDTH}
          text="Phone Number"
          type="phone"
          value={this.state.phone}
          onChange={text => this.setState({phone: text})}
        />
        <NextButton
          text={'NEXT'}
          extraStyles={styles.btnStyles}
          onPress={() => this.props.navigation.navigate('VerifyPhone')}
        />
        <Text style={[styles.helpText, {textAlign: 'center', marginTop: 30}]}>
          By entering your phone number, you agree to our Terms and Conditions
        </Text>
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
});

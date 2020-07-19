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
import Header from '~/components/Headers/Header';
import RedirectLogin from '~/components/Footers/RedirectLogin';
import axios from 'axios';

const TEXT_INPUT_WIDTH = 290;

export default class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      username: '',
    };
  }

  signup = () => {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      username,
    } = this.state;

    /* if (!firstName || !lastName || !email || !password || !confirmPassword)
      return null;

    if (password !== confirmPassword) return null; */

    axios
      .post('/api/auth/register', {
        firstName: 'Howie',
        lastName: 'Doo',
        username: 'melssfd',
        email: 'fsdf@yahoo.com',
        password: '234Ar234',
        phoneNumber: 535345345345,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    this.props.navigation.navigate('Phone');
  };

  render() {
    return (
      <SafeAreaView style={styles.signUpContainer}>
        <Header goBack={() => this.props.navigation.goBack()} />
        <Text style={styles.signUpTitle}>Sign Up</Text>
        <AuthTextInput
          contentWidth={TEXT_INPUT_WIDTH}
          text="First Name"
          type="name"
          onChange={text => this.setState({firstName: text})}
          value={this.state.firstName}
        />
        <AuthTextInput
          contentWidth={TEXT_INPUT_WIDTH}
          text="Last Name"
          type="name"
          onChange={text => this.setState({lastName: text})}
          value={this.state.lastName}
        />
        <AuthTextInput
          contentWidth={TEXT_INPUT_WIDTH}
          text="Username"
          type="name"
          onChange={text => this.setState({username: text})}
          value={this.state.username}
        />
        <AuthTextInput
          contentWidth={TEXT_INPUT_WIDTH}
          text="Email"
          type="email"
          onChange={text => this.setState({email: text})}
          value={this.state.email}
        />
        <AuthTextInput
          contentWidth={TEXT_INPUT_WIDTH}
          text="Enter Your Password"
          type="password"
          onChange={text => this.setState({password: text})}
          value={this.state.password}
        />
        <AuthTextInput
          contentWidth={TEXT_INPUT_WIDTH}
          text="Confirm Your Password"
          type="confirm"
          onChange={text => this.setState({confirmPassword: text})}
          value={this.state.confirmPassword}
        />
        <NextButton
          text={'CREATE'}
          onPress={this.signup.bind(this)}
          extraStyles={styles.btnStyles}
        />
        <RedirectLogin navigation={this.props.navigation} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  signUpContainer: {
    paddingTop: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  signUpTitle: {
    fontFamily: 'Quicksand-Bold',
    fontStyle: 'normal',
    fontSize: 36,
    lineHeight: 45,
    color: '#9ACD00',
    marginBottom: 10,
    textAlign: 'left',
    width: TEXT_INPUT_WIDTH,
  },

  btnStyles: {
    marginTop: 80,
  },

  authButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: TEXT_INPUT_WIDTH,
  },
});

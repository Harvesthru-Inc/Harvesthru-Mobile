import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import NextButton from '~/components/Buttons/NextButton';
import AuthTextInput from '~/components/TextInputs/AuthTextInput';
import Header from '~/components/Headers/Header';
import RedirectLogin from '~/components/Footers/RedirectLogin';

// Width of text inputs
const TEXT_INPUT_WIDTH = 290;

// Default error type for flash message
const ERROR_MSG_TYPE = 'danger';
const SUCCESS_MSG_TYPE = 'success';

export default class Signup extends React.Component {
  // Initialize state
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
  };

  // Show flash message with message and type
  showToast = (message, type) => {
    showMessage({
      message,
      type,
      hideOnPress: true,
      icon: ERROR_MSG_TYPE,
    });
  };

  // Signup function
  signup = () => {
    const {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword,
    } = this.state;

    // Check that all fields are non-empty
    let emptyMsg = '';

    // Check first name
    if (!firstName) {
      emptyMsg = 'First Name cannot be blank!';
    } else if (!lastName) {
      emptyMsg = 'Last Name cannot be blank!';
    } else if (!username) {
      emptyMsg = 'Username cannot be blank!';
    } else if (!email) {
      emptyMsg = 'Email cannot be blank!';
    } else if (!password) {
      emptyMsg = 'Password cannot be blank!';
    } else {
      // No else condition
    }

    // If anything empty, show error
    if (emptyMsg) {
      return this.showToast(emptyMsg, ERROR_MSG_TYPE);
    }

    // Check that the passwords match
    if (password !== confirmPassword) {
      return this.showToast('Passwords do not match!', ERROR_MSG_TYPE);
    }

    // Call user registration endpoint
    axios
      .post('/api/auth/register', {
        firstName,
        lastName,
        username,
        email,
        password,
      })
      // Log response
      .then(response => {
        // Get user auth token
        console.log(response);
        this.showToast(response.message, SUCCESS_MSG_TYPE);

        // Navigate to phone authentication
        this.props.navigation.navigate('Phone');
      })
      // Log error
      .catch(error => {
        console.log(error);
        this.showToast(
          (error.response && error.response.data) || error.message,
          ERROR_MSG_TYPE,
        );
      });
  };

  render() {
    return (
      <SafeAreaView style={styles.signUpContainer}>
        <Header goBack={() => this.props.navigation.goBack()} />
        <Text style={styles.signUpTitle}>Sign Up</Text>
        <AuthTextInput
          contentWidth={TEXT_INPUT_WIDTH}
          text="First Name *"
          type="name"
          onChange={text => this.setState({firstName: text})}
          value={this.state.firstName}
        />
        <AuthTextInput
          contentWidth={TEXT_INPUT_WIDTH}
          text="Last Name *"
          type="name"
          onChange={text => this.setState({lastName: text})}
          value={this.state.lastName}
        />
        <AuthTextInput
          contentWidth={TEXT_INPUT_WIDTH}
          text="Username *"
          type="name"
          onChange={text => this.setState({username: text})}
          value={this.state.username}
        />
        <AuthTextInput
          contentWidth={TEXT_INPUT_WIDTH}
          text="Email *"
          type="email"
          onChange={text => this.setState({email: text})}
          value={this.state.email}
        />
        <AuthTextInput
          contentWidth={TEXT_INPUT_WIDTH}
          text="Enter Your Password *"
          type="password"
          onChange={text => this.setState({password: text})}
          value={this.state.password}
        />
        <AuthTextInput
          contentWidth={TEXT_INPUT_WIDTH}
          text="Confirm Your Password *"
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

// Signup Styles
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

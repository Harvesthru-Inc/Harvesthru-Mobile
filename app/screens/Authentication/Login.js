import React from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {Images} from '~/assets/images';
import NextButton from '~/components/Buttons/NextButton';
import AuthTextInput from '~/components/TextInputs/AuthTextInput';
import RedirectLogin from '~/components/Footers/RedirectLogin';
import Loading from '~/screens/Loading';
import {LoginFn} from '~/api/login';
import showToast from '~/utils/toastMessage';

// Set width for login text input
const TEXT_INPUT_WIDTH = 290;
const ERROR_MSG_TYPE = 'danger';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
    };
  }

  // login function
  login = async () => {
    const {email, password} = this.state;
    const {navigation} = this.props;

    // Check that all fields are non-empty
    let emptyMsg = '';

    // Check first name
    if (!password) {
      emptyMsg = 'Please enter a password!';
    }

    if (!email) {
      emptyMsg = 'Please enter an email!';
    }

    // If anything empty, show error
    if (emptyMsg) {
      return showToast(emptyMsg, ERROR_MSG_TYPE, ERROR_MSG_TYPE);
    }

    // Set loading
    this.setState({loading: true});

    // Call login function
    await LoginFn(email, password, navigation);

    // Stop loading
    this.setState({loading: false});
  };

  // RENDER
  render() {
    // If loading, return loading
    if (this.state.loading) {
      return <Loading />;
    }

    // Otherwise return login
    return (
      <SafeAreaView style={styles.loginContainer}>
        <Image source={Images.wheatIcon} />
        <Text style={styles.loginTitle}>Harvesthru</Text>
        <AuthTextInput
          contentWidth={TEXT_INPUT_WIDTH}
          text="Email / Phone Number"
          type="email"
          onChange={text => this.setState({email: text})}
          value={this.state.email}
        />
        <AuthTextInput
          contentWidth={TEXT_INPUT_WIDTH}
          text="Password"
          type="password"
          onChange={text => this.setState({password: text})}
          value={this.state.password}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ForgotPass')}>
          <Text style={styles.forgotPass}>Forgot Password?</Text>
        </TouchableOpacity>
        <NextButton
          text={'LOGIN'}
          extraStyles={styles.btnStyles}
          onPress={this.login}
        />
        <View style={styles.loginWith}>
          <View style={styles.loginWithHr} />
          <Text style={styles.loginWithText}>Or Log In With</Text>
          <View style={styles.loginWithHr} />
        </View>
        <View style={styles.authButtons}>
          <Image source={Images.fbIcon} />
          <Image source={Images.googleIcon} />
        </View>
        <RedirectLogin navigation={this.props.navigation} login={true} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  loginContainer: {
    paddingTop: 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginTitle: {
    fontFamily: 'Nunito-Bold',
    fontStyle: 'normal',
    fontSize: 36,
    lineHeight: 45,
    color: '#9ACD00',
    marginBottom: 10,
  },

  loginWith: {
    flexDirection: 'row',
    width: TEXT_INPUT_WIDTH,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 25,
  },

  loginWithHr: {
    width: 79,
    height: 1,
    borderWidth: 0.7,
    borderColor: '#CDCDCD',
  },

  loginWithText: {
    fontFamily: 'Nunito-Bold',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    color: '#989898',
    letterSpacing: 0.3,
  },

  forgotPass: {
    marginTop: 20,
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'italic',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 17,
    color: '#A5A5A5',
    letterSpacing: 0.5,
    width: TEXT_INPUT_WIDTH,
    textAlign: 'right',
  },

  btnStyles: {
    marginTop: 40,
    width: TEXT_INPUT_WIDTH,
  },

  authButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: TEXT_INPUT_WIDTH,
  },

  redirectSignup: {
    flexDirection: 'row',
    width: TEXT_INPUT_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
  },

  signUpText: {
    fontFamily: 'Nunito-Regular',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
  },

  signUpTextBold: {
    fontFamily: 'Nunito-Bold',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
  },
});

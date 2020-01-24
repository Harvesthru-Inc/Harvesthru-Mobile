import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import NextButton from '../components/NextButton';

export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <NextButton
          text={'RETURN LOGIN'}
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NextButton from '~/components/Buttons/NextButton';
import {openSettings} from 'react-native-permissions';

// Main app container
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.internetText}>No Internet Connection</Text>
        <NextButton
          text={'Check Connection'}
          onPress={() => openSettings()}
          extraStyles={styles.btnStyles}
        />
      </View>
    );
  }
}

// Offline styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnStyles: {
    marginTop: 60,
  },

  internetText: {
    marginTop: 20,
    fontFamily: 'Montserrat-Regular',
    fontStyle: 'italic',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 20,
    color: 'black',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
});

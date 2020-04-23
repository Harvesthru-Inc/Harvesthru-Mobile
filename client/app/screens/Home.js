import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import NextButton from '../components/NextButton';
import MapView from 'react-native-maps';

export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MapView />
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

import React from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

export default class Home extends React.Component {
  render() {
    return <SafeAreaView style={styles.container}></SafeAreaView>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

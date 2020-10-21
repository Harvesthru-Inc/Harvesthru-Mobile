import React from 'react';
import {View, StyleSheet} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import NetInfo from '@react-native-community/netinfo';
import Navigator from '~/navigation/Navigator';
import OfflineScreen from '~/screens/Offline/OfflineScreen';

// Main app container
export default class App extends React.Component {
  state = {
    wifiEnabled: true,
  };

  componentDidMount() {
    // Subscribe to network changes
    NetInfo.addEventListener(state => {
      // Check if wifi is enabled, set corresponding state
      const {wifiEnabled} = this.state;
      if (state.isConnected) {
        if (!wifiEnabled) {
          this.setState({wifiEnabled: true});
        }
      } else {
        if (wifiEnabled) {
          this.setState({wifiEnabled: false});
        }
      }
    });
  }

  render() {
    // If no internet connection, return offline screen
    if (!this.state.wifiEnabled) {
      return <OfflineScreen />;
    }

    return (
      <View style={styles.container}>
        <Navigator />
        <FlashMessage position="top" />
      </View>
    );
  }
}

// App styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

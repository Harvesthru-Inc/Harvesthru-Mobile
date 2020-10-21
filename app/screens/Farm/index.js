import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import axios from 'axios';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Farm extends React.Component {
  constructor(props) {
    super(props);

    // Get state
    this.state = {
      farm: null,
    };

    // Call get farm
    this.getFarm();
  }

  // Get specific
  getFarm = () => {
    // Get auth token
    const authToken = this.props.navigation.getParam('authToken');
    const farmId = this.props.navigation.getParam('farmId');

    // Get fetch options
    const options = {
      headers: {'x-auth-token': authToken},
    };

    // Get all farms
    axios
      .get(`/api/farm/${farmId}`, options)
      // Log response
      .then(response => {
        if (response && response.data && response.data.farms) {
          this.setState({farm: response.data.farms});
        }
      })
      // Log error
      .catch(error => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View>
            <Image />
            <View>
              <Image />
              <Image />
            </View>
          </View>
          <View />
        </View>
        <View>
          <Image />
          <View>
            <View>
              <View>
                <View>
                  <Text />
                  <Text />
                </View>
                <View />
              </View>
              <View>
                <View>
                  <Image />
                  <Text />
                </View>
                <TouchableOpacity />
              </View>
            </View>
            <View>
              <Text />
              <Text />
            </View>
            <View />
          </View>
        </View>
        <Text>hi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

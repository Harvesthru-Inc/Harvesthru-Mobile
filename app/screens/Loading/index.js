import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {Lottie} from '~/assets/lottieFiles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <LottieView source={Lottie.delivery} autoPlay loop />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9ACD00',
  },
});

import LottieView from 'lottie-react-native';
import React from 'react';

function Loading() {
  return (
    <LottieView
      source={require('../../assets/loading_animation.json')}
      style={{width: '100%', height: '100%'}}
      autoPlay
      loop
    />
  );
}

export default Loading;

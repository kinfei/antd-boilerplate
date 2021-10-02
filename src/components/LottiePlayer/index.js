import React from 'react';
import Lottie from 'react-lottie';

function LottiePlayer({ animationData }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} height={350} width={350} />;
}

export default LottiePlayer;

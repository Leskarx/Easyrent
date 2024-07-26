import React from 'react';
import Lottie from 'react-lottie';

const HomeLoadingScreen = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: '/ani.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50">
      <Lottie isClickToPauseDisabled={true} options={defaultOptions} height={150} width={150} />
    </div>
  );
};

export default HomeLoadingScreen;

import React from 'react';
import AuthButton from '../AuthButton';

const NotAuthView = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>If you want to search tracks, you can get auth here!</h1>
      <AuthButton />
    </div>
  );
};

export default NotAuthView;

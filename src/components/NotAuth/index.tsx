import React from 'react';
import AuthButton from '../AuthButton';
import { Covers } from './Covers';
import './style.css';

const NotAuthView = () => {
  return (
    <div
      style={{
        maxWidth: '1100px',
        margin: '0 auto',
        width: '90%',
      }}
    >
      <div className="container">
        <div className="header">
          <h1 className="header header-title">Music & Memories</h1>
          <p className="header header-description">
            Create your spotify playlists that are personalized to your mood,
            unique taste and also memories. Select your best tracks and name
            your playlist by yourself.
          </p>
          <AuthButton />
        </div>
      </div>
      <Covers />
    </div>
  );
};

export default NotAuthView;

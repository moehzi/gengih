import React from 'react';
import './style.css';

const AuthButton = () => {
  function randomString(length) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${
    process.env.REACT_APP_SPOTIFY_CLIENT_ID
  }&redirect_uri=${encodeURIComponent(
    process.env.REACT_APP_SPOTIFY_REDIRECT_URI
  )}&scope=${encodeURIComponent(
    process.env.REACT_APP_SPOTIFY_SCOPES
  )}&response_type=token&state=${randomString(16)}&show_dialog=true`;

  return (
    <div>
      <a
        href={SPOTIFY_AUTH_URL}
        style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}
      >
        <button className="btn">
          <span className="ic-spotify">
            <img src="/images/ic-spotify.png" />
          </span>
          Create your playlist !
        </button>
      </a>
    </div>
  );
};

export default AuthButton;

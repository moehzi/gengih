import './style.css';

const AuthButton = () => {
  function randomString(length: number) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const scope =
    'playlist-modify-private user-read-private user-top-read playlist-read-private';

  const SPOTIFY_AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${
    process.env.REACT_APP_SPOTIFY_CLIENT_ID
  }&redirect_uri=${encodeURIComponent(
    process.env.REACT_APP_SPOTIFY_REDIRECT_URI || ''
  )}&scope=${scope}&response_type=token&state=${randomString(
    16
  )}&show_dialog=true`;

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

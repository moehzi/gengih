import axios from 'axios';

export const getCurrentProfile = async (token: string) => {
  const res = await axios.get('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

type createPayload = {
  name: string;
  description: string;
  public: boolean;
};

export const createPlaylist = async (
  user: string,
  token: string,
  payload: createPayload
) => {
  return await axios.post(
    `https://api.spotify.com/v1/users/${user}/playlists`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const addItemToPlaylist = async (
  playlistId: number,
  token: string,
  uris: string
) => {
  return await axios.post(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${encodeURIComponent(
      uris
    )}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getSongList = async (token: string, valInput: string) => {
  const response = await axios.get(
    `https://api.spotify.com/v1/search?q=${valInput}&limit=30&type=track`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const getMyPlaylist = async (token: string) => {
  const response = await axios.get(
    `https://api.spotify.com/v1/me/playlists?limit=30`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

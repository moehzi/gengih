import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { RootState } from '../../store/store';

export const YourPlaylist = () => {
  const token = useSelector((state: RootState) => state.token?.value);

  return <>{token ? <h1>hehe</h1> : <Redirect to="/" />}</>;
};

import React, { useEffect } from 'react';
import NotAuthView from '../../components/NotAuth';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setToken } from '../../store/authSlice';

export const Homepage = () => {
  const token = useSelector((state) => state.token?.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = window.location.hash;

    let access_token = window.localStorage.getItem('token');

    if (!token && hash) {
      access_token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];

      window.localStorage.setItem('token', access_token);
      window.location.hash = '';
      dispatch(setToken(access_token));
    }
  }, [dispatch]);

  return (
    <div
      style={{
        backgroundColor: '#060606',
        position: 'relative',
      }}
    >
      <div
        style={{
          backgroundColor: '#060606',
          color: 'black',
          opacity: '35%',
          width: '100%',
          zIndex: '50',
          minHeight: '100vh',
          position: 'absolute',
        }}
      />
      {token ? <Redirect to="create-playlist" /> : <NotAuthView />}
    </div>
  );
};

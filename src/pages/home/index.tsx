import NotAuthView from '../../components/NotAuth';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RootState } from '../../store/store';

export const Homepage = () => {
  const token = useSelector((state: RootState) => state.token?.value);

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
          position: 'absolute',
        }}
      />
      {token ? <Redirect to="create-playlist" /> : <NotAuthView />}
    </div>
  );
};

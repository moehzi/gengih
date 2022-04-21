import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPlaylistById } from '../../services/spotify';
import { RootState } from '../../store/store';
import { Playlist } from '../../interfaces/PlaylistData';
import { TabelContainer } from '../../components/TabelContainer';
import { ListTrack } from '../../components/ListTrack';
import { Tbody, Heading, Box } from '@chakra-ui/react';
import moment from 'moment';

type PlaylistParams = {
  id: string;
};

export const DetailPlaylist = () => {
  const { id } = useParams<PlaylistParams>();
  const token = useSelector((state: RootState) => state.token?.value);
  const [isLoading, setIsLoading] = useState(true);
  const [playlist, setPlaylist] = useState<Playlist>({} as Playlist);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    setIsUpdated(false);
    getPlaylistById(token, id).then((res) => {
      console.log(res);
      setPlaylist(res);
      setIsLoading(false);
    });
  }, [id, isUpdated]);

  const renderPlaylistById = (datas: Playlist) => {
    return (
      <Box
        key={datas.id}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        gap="1.5rem"
        color="white"
        mb="2rem"
      >
        <img src={datas.images[0]?.url} width={250} height={250} />
        <div>
          <Heading as="h1" size="3xl">
            {datas.name}
          </Heading>
          <h5 style={{ opacity: '70%', fontSize: '1.25rem' }}>
            {datas.description}
          </h5>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '.25rem',
              marginTop: '.5rem',
            }}
          >
            <h5>{datas.owner.display_name}</h5>
            <div
              style={{
                width: '5px',
                height: '5px',
                marginTop: '.25rem',
                backgroundColor: 'white',
                borderRadius: '50%',
              }}
            ></div>
            <h5 style={{ color: 'white' }}>
              {datas.tracks.items.length} songs
            </h5>
          </div>
        </div>
      </Box>
    );
  };

  const renderListTrack = (datas: Playlist) => {
    return datas.tracks.items.map((item, index) => {
      return (
        <ListTrack
          id={item.track.uri}
          title={item.track.name}
          key={item.track.uri}
          album={item.track.album.name}
          number={index + 1}
          image={item.track.album.images[0].url}
          artist={item.track.artists[0].name}
          duration={item.track.duration_ms}
          date={
            moment(moment().format('YYYY-MM-DD')).diff(
              moment(moment(new Date(item.added_at)).format('YYYY-MM-DD')),
              'days'
            ) > 30
              ? moment(new Date(item.added_at)).format('ll')
              : moment(new Date(item.added_at)).fromNow()
          }
        />
      );
    });
  };

  return (
    <div
      style={{
        marginTop: '2rem',
        width: '90%',
        margin: '0 auto',
      }}
    >
      {!isLoading && renderPlaylistById(playlist)}
      {!isLoading && (
        <TabelContainer>
          <Tbody>{renderListTrack(playlist)}</Tbody>
        </TabelContainer>
      )}
    </div>
  );
};

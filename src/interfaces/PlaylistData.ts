import { Track } from './TrackData';

export interface Playlist {
  id: string;
  uri: string;
  name: string;
  description: string;
  images: [{ url: string }];
  tracks: {
    items: PlaylistTracks[];
  };
  owner: {
    display_name: string;
  };
}

export interface PlaylistTracks {
  added_at: string;
  track: Track;
}

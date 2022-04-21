export interface Track {
  id: string;
  uri: string;
  isSelected: boolean;
  album: {
    images: imagesTrack[];
    name?: string;
  };
  name: string;
  artists: artistTrack[];
  duration_ms?: number;
}
export interface SelectedTrack {
  id: string;
  uri: string;
  isSelected: boolean;
  album: {
    images: imagesTrack[];
  };
  name: string;
  artists: artistTrack[];
}

interface imagesTrack {
  height: number;
  url: string;
  width: number;
}

interface artistTrack {
  id: string;
  name: string;
  uri: string;
}

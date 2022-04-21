import { Track } from '../interfaces/TrackData';

export const removeItem = (arr: Track[], value: Track) => {
  return arr.filter((ele: Track) => {
    return ele !== value;
  });
};

import { Track } from '../interfaces/TrackData';
interface removeItemPara {
  arr: Track[];
  value: Track;
  ele: Track;
}

export const removeItem = (arr: Track[], value: Track) => {
  return arr.filter((ele: Track) => {
    return ele !== value;
  });
};

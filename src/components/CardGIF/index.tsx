import Gif from '../gif/Gif';
import './style.css';

interface AllGifs {
  giphys: Gifs[];
}

interface Gifs {
  title: string;
  images: {
    fixed_width: {
      url: string;
    };
  };
}

export const CardGIF = ({ giphys }: AllGifs) => {
  const renderGif = () => {
    return giphys.map((giphy, index) => {
      return (
        <Gif
          title={giphy.title}
          url={giphy.images.fixed_width.url}
          key={index}
        />
      );
    });
  };

  return <div className="card">{renderGif()}</div>;
};

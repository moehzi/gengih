import ButtonSearch from '../../components/ButtonSearch';
import GIFImage from '../../components/GIFImage';
import Input from '../../components/Input';
import gifs from '../../data/gifs';

export const Home = () => {
  const renderGifs = () => {
    return gifs
      .filter((gif) => gif.rating === 'g')
      .map((filteredGif) => {
        return <GIFImage title={filteredGif.title} image={filteredGif.url} />;
      });
  };

  return (
    <div>
      <Input />
      <ButtonSearch />
      {renderGifs()}
    </div>
  );
};

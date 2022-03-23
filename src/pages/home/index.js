import ButtonSearch from '../../components/ButtonSearch';
import GIFImage from '../../components/GIFImage';
import Input from '../../components/Input';
import gif from '../../data/gif';

export const Home = () => {
  const { title, url } = gif;

  return (
    <div>
      <Input />
      <ButtonSearch />
      <GIFImage title={title} image={url} />
    </div>
  );
};

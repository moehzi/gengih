/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import RowAlbum from '../../../components/RowAlbum';
import { data } from '../../../data/album';
import { CreatePlaylist } from '../../../pages/create-playlist';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SearchBox from '../../../components/SearchBox';

describe('rendering track component', () => {
  test('should render track component ', () => {
    render(
      <RowAlbum
        image={data.images[1].url}
        title={data.name}
        artist={data.artists[0].name}
      />
    );
    const image = screen.getByAltText(data.name);
    expect(image).toHaveAttribute('src', data.images[1].url);
    expect(screen.getByText(data.name)).toBeInTheDocument();
    expect(screen.getByText(data.artists[0].name)).toBeInTheDocument();
  });
});

// still not work so confuse :(
// describe('fetch', () => {
//   const handleClick = jest.fn();
//   const handleChange = jest.fn();
//   const setup = () => {
//     const utils = render(
//       <SearchBox
//         handleSubmitIcon={handleClick}
//         handleSubmit={handleClick}
//         handleChange={handleChange}
//       />
//     );
//     const input = utils.getByLabelText('track');
//     return {
//       input,
//       ...utils,
//     };
//   };

//   test('fetch and display searchapi', async () => {
//     const { input } = setup();
//     const button = screen.getByRole('button');
//     fireEvent.change(input, { target: { value: 'Mawar Jingga' } });
//     fireEvent.click(button);
//     const { findByText } = render();
//     expect(await findByText('Mawar Jingga')).tobeInTheDocument();
//   });
// });

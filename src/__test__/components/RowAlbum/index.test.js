/* eslint-disable no-undef */
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import RowAlbum from '../../../components/RowAlbum';
import { data } from '../../../data/album';
import { BrowserRouter } from 'react-router-dom';
import App from '../../../App';
import userEvent from '@testing-library/user-event';

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

  test('should fetch search api and display it ', async () => {
    window.history.pushState(
      {},
      'Home',
      `#access_token=ini_token&token_type=Bearer&expires_in=3600`
    );

    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(window.location.pathname).toStrictEqual('/create-playlist');
    });

    const searchInput = screen.getByTestId('search-input');
    const iconSearch = screen.getByTestId('icon-search');

    await userEvent.type(searchInput, 'Mawar');
    await userEvent.click(iconSearch);

    setTimeout(async () => {
      await waitFor(() => {
        screen
          .getAllByTestId('track-cards')
          .forEach((el) => expect(el).toBeInTheDocument());
      });
    }, 0);
  });
});

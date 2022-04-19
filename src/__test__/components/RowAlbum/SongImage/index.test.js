/* eslint-disable no-undef */
import { SongImage } from '../../../../components/RowAlbum/SongImage';
import { render, screen } from '@testing-library/react';

describe('song image component', () => {
  test('should have image src ', () => {
    render(
      <SongImage
        image="https://image.shutterstock.com/image-photo/vinyl-record-music-close-up-260nw-1731506476.jpg"
        title="Mawar Jingga"
      />
    );
    const image = screen.getByAltText('Mawar Jingga');
    expect(image).toHaveAttribute(
      'src',
      'https://image.shutterstock.com/image-photo/vinyl-record-music-close-up-260nw-1731506476.jpg'
    );
  });
});

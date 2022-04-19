/* eslint-disable no-undef */
import { SongArtist } from '../../../../components/RowAlbum/SongArtist';
import { render, screen } from '@testing-library/react';

describe('song artist component', () => {
  test('should have artist text in card ', () => {
    render(<SongArtist artist="Noah" />);
    const songArtist = screen.getByText('Noah');
    expect(songArtist).toBeInTheDocument();
  });
});

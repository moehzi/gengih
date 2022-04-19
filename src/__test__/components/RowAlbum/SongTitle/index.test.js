/* eslint-disable no-undef */
import { SongTitle } from '../../../../components/RowAlbum/SongTitle';
import { render, screen } from '@testing-library/react';

describe('song title component', () => {
  test('should have title song ', () => {
    render(<SongTitle title="Mawar Jingga" />);
    const songTitle = screen.getByText('Mawar Jingga');
    expect(songTitle).toBeInTheDocument();
  });
});

/* eslint-disable no-undef */
import { ButtonSelect } from '../../../../components/RowAlbum/ButtonSelect';
import { render, screen } from '@testing-library/react';

describe('button select component', () => {
  test('should have select text in button ', () => {
    render(<ButtonSelect />);
    const buttonSelect = screen.getByText('Select');
    expect(buttonSelect).toBeInTheDocument();
  });
});

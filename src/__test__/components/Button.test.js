/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import Button from '../../components/Button';

describe('button component', () => {
  it('should have search text ', () => {
    render(<Button />);
    const searchText = screen.getByText('Search');
    expect(searchText).toBeVisible();
  });
});

/* eslint-disable no-undef */
import Navbar from '../../components/Navbar/index';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('navbar component', () => {
  it('should have giphys text ', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const logo = screen.getByText('GIPHYS');
    expect(logo).toBeVisible();
  });
});

import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './nav-bar';

describe('NavBar', () => {
  test('navigates to the correct page when link is clicked', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    const calculatorLink = screen.getByText('Calculator');
    fireEvent.click(calculatorLink);
    expect(window.location.pathname).toBe('/calculator');
  });
});

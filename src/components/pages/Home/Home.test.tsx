import Home from "./Home.tsx";
import { render, screen, fireEvent } from '@testing-library/react';

describe('Home component', () => {
  it('should have a heading', () => {
    render(<Home />);
    const h1 = screen.queryByText('Vite + React');

    expect(h1).toBeInTheDocument();
  });

  it('should show the button count set to 3', () => {
    render(<Home />);
    const button = screen.queryByText('count is 0');

    expect(button).not.toBeNull();

    fireEvent.click(button as HTMLElement);
    fireEvent.click(button as HTMLElement);
    fireEvent.click(button as HTMLElement);

    expect(button?.innerHTML).toBe('count is 3');
  });

  it('should match snapshot', () => {
    const { asFragment} = render(<Home />)

    expect(asFragment()).toMatchSnapshot()
  })
});

import App from "./App.tsx";
import { render, screen, fireEvent } from '@testing-library/react';

describe('App', async () => {
    it('should be truthy', async () => {
        expect(true).toBeTruthy();
    });

    it('should have a heading', async () => {
        render(<App />);
        const h1 = await screen.queryByText('Vite + React');

        expect(h1).toBeInTheDocument();
    });

    it('should show the button count set to 3', async () => {
        await render(<App />);
        const button = await screen.queryByText('count is 0');

        expect(button).not.toBeNull();

        fireEvent.click(button as HTMLElement);
        fireEvent.click(button as HTMLElement);
        fireEvent.click(button as HTMLElement);

        expect(button?.innerHTML).toBe('count is 3');
    });

    it('should match snapshot', () => {
        const component = render(<App />)

        expect(component).toMatchSnapshot()
    })
});

import Link from './Link';
import {render, screen} from "@testing-library/react";

describe('Link component', () => {
    it('should render a link with href', () => {
        const url = 'https://example.com';
        const text = 'Example Link';

        render(<Link href={url}>{text}</Link>);

        const linkElement = screen.getByText(text);

        expect(linkElement).toHaveAttribute('href', url);
    });

    it('should render a link with target', () => {
        const url = 'https://example.com';
        const target = '_blank';
        const text = 'Example Link';

        render(<Link href={url} target={target}>{text}</Link>);

        const linkElement = screen.getByText(text);

        expect(linkElement).toHaveAttribute('target', target);
    });

    it('should render a link without target', () => {
        const url = 'https://example.com';
        const text = 'Example Link';

        render(<Link href={url}>{text}</Link>);

        const linkElement = screen.getByText(text);

        expect(linkElement).not.toHaveAttribute('target');
    });

    it('matches snapshot', () => {
        const url = 'https://example.com';
        const text = 'Example Link';

        const { asFragment } = render(<Link href={url}>{text}</Link>);

        expect(asFragment()).toMatchSnapshot();
    });
});

import Image from "./Image.tsx";
import {render, screen} from "@testing-library/react";

describe('Image component', () => {
    it('should renders an image with the provided src and alt text', () => {
        const src = 'path-to-your-image.jpg';
        const alt = 'Test Image';

        render(<Image src={src} alt={alt} />);

        const imageElement = screen.getByAltText(alt);

        expect(imageElement).toHaveAttribute('src', src);
    });

    it('should render an image with class', () => {
        const className = 'some-class';
        const src = 'path-to-your-image.jpg';
        const alt = 'Test Image';

        render(<Image src={src}  className={className} alt={alt} />);

        const paragraphElement = screen.getByAltText(alt);

        expect(paragraphElement).toHaveAttribute('class', className);
    });

    it('should match snapshot', () => {
        const src = 'path-to-your-image.jpg';
        const alt = 'Test Image';

        const { asFragment } = render(<Image src={src} alt={alt} />);

        expect(asFragment()).toMatchSnapshot();
    });
});

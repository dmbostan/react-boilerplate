import Logos from "./Logos.tsx";
import {render} from "@testing-library/react";

describe('Logos component', () => {
    it('matches snapshot', () => {
        const { asFragment } = render(<Logos />);

        expect(asFragment()).toMatchSnapshot();
    });
});

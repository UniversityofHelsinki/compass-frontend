import {render} from "@testing-library/react";
import Footer from "./Footer";
import React from "react";
import {axe} from "jest-axe";

describe('Footer', () => {
    it('should not have any accessibility violations', async () => {

        const { container } = render(<Footer />);
        const results = await axe(container);

        // use the matcher function in the test
        expect(results).toHaveNoViolations();
    });
});

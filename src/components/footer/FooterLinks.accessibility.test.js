import {render} from "@testing-library/react";
import FooterLinks from "./FooterLinks";
import React from "react";
import {axe} from "jest-axe";

describe('FooterLinks', () => {
    it('should not have any accessibility violations', async () => {

        const { container } = render(<FooterLinks />);
        const results = await axe(container);

        // use the matcher function in the test
        expect(results).toHaveNoViolations();
    });
});


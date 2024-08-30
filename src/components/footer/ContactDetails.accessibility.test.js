import {render} from "@testing-library/react";
import ContactDetails from "./ContactDetails";
import React from "react";
import {axe} from "jest-axe";


describe('ContactDetails', () => {
    it('should not have any accessibility violations', async () => {

        const { container } = render(<ContactDetails />);
        const results = await axe(container);

        // use the matcher function in the test
        expect(results).toHaveNoViolations();
    });
});


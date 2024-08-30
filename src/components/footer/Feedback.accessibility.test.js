import {render} from "@testing-library/react";
import React from "react";
import {axe} from "jest-axe";
import Feedback from "./Feedback";

describe('Feedback', () => {
    it('should not have any accessibility violations', async () => {

        const { container } = render(<Feedback />);
        const results = await axe(container);

        // use the matcher function in the test
        expect(results).toHaveNoViolations();
    });
});


import React from 'react';
import { render } from '@testing-library/react';
import FormFreeAnswer from "./FormFreeAnswer";

it('renders', () => {
    render(
        <FormFreeAnswer answer={"test"}>
        </FormFreeAnswer>
    );
});

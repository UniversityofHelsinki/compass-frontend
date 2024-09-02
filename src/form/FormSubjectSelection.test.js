import React from 'react';
import { render } from '@testing-library/react';
import FormSubjectSelection from "./FormSubjectSelection";

it('renders', () => {
    render(
        <FormSubjectSelection subject={"test"}>
            
        </FormSubjectSelection>
    );
});

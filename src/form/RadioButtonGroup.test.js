import React from 'react';
import { render } from '@testing-library/react';
import RadioButtonGroup from "./RadioButtonGroup";
import { PUBLICITIES  } from '../Constants.js';

it('renders', () => {
    render(<RadioButtonGroup label="Valinta" options={PUBLICITIES} onChange={() => {}} value={''} />);
});

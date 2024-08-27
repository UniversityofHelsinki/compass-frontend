import React from 'react';
import { render } from '@testing-library/react';
import DropDown from './DropDown';
it('renders', () => {
    render(<DropDown
        options={[{ value: 'arvo1', label: 'Eka' }, { value: 'arvo2', label: 'Toka' }]}
    />);
});

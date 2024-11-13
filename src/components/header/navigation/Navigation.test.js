import React from 'react';
import { render, screen } from '../../../test/render.js';
import Navigation from './Navigation';

test('renders', () => {
    render(<Navigation isTeacher={false} />);
});

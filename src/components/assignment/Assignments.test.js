import React from 'react';
import { render, screen } from '../../test/render.js';
import Assignment from './Assignment';
import Assignments from "./Assignments";

it('renders', () => {
    render(
        <Assignments />
    );
});

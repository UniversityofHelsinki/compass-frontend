import { render, screen } from '@testing-library/react';
import Compass from "./Compass";
import {MockProvider} from "./reducers/MockProvider";
import React from "react";

const reducers = {
    users: {
        user: {
            displayName: 'Keijo Keke',
            eppn: 'keijoke'
        },
        location: {
            path: '/',
            searchParameters: {}
        },
        courses: {
            allCourses: [{
                    value: "eka",
                    label: "Kurssi1"
                },
                {
                    value: "toka",
                    label: "Kurssi2",
                },
                {
                    value: "kolmas",
                    label: "Kurssi3",
                }]
        },
        collections: {
            collections: []
        }
    }
}

it('renders', () => {
    render(
        <MockProvider mockReducers={reducers}>
            <Compass />
        </MockProvider>
    );
});

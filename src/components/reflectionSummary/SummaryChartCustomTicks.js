import React from 'react';
import { ReactComponent as Level0Icon } from '../utilities/icons/minus.svg';
import { ReactComponent as Level1Icon } from '../utilities/icons/square.svg';
import { ReactComponent as Level2Icon } from '../utilities/icons/log.svg';
import { ReactComponent as Level3Icon } from '../utilities/icons/units-and-faculties.svg';
import { ReactComponent as Level4Icon } from '../utilities/icons/favorites.svg';

import './SummaryChartCustomTicks.css';

const CustomTick = ({ x, y, payload }) => {
    let IconComponent;

    switch (payload.value) {
        case 0:
            IconComponent = Level0Icon;
            break;
        case 1:
            IconComponent = Level1Icon;
            break;
        case 2:
            IconComponent = Level2Icon;
            break;
        case 3:
            IconComponent = Level3Icon;
            break;
        case 4:
            IconComponent = Level4Icon;
            break;
        default:
            IconComponent = null;
            break;
    }

    return IconComponent ? (
        <foreignObject x={x - 15} y={y - 10} width={20} height={20}>
            <IconComponent className="y-axis-icons" />
        </foreignObject>
    ) : null;
};

export default CustomTick;

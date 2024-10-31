import React from 'react';
import { ReactComponent as Level0Icon } from '../utilities/icons/circle.svg';
import { ReactComponent as Level1Icon } from '../utilities/icons/circle-fill.svg';
import { ReactComponent as Level2Icon } from '../utilities/icons/three-dots-vertical.svg';
import { ReactComponent as Level3Icon } from '../utilities/icons/bounding-box-circles.svg';
import { ReactComponent as Level4Icon } from '../utilities/icons/diagram-3.svg';

import './SummaryChartCustomTicks.css';
import PropTypes from 'prop-types';

const CustomTick = ({ x, y, payload }) => {
    const value = payload?.value;

    let IconComponent;

    switch (value) {
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

CustomTick.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    payload: PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
};

export default CustomTick;

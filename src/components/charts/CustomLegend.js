import React from 'react';
import { ReactComponent as Level0Icon } from '../utilities/icons/circle.svg';
import { ReactComponent as Level1Icon } from '../utilities/icons/circle-fill.svg';
import { ReactComponent as Level2Icon } from '../utilities/icons/three-dots-vertical.svg';
import { ReactComponent as Level3Icon } from '../utilities/icons/bounding-box-circles.svg';
import { ReactComponent as Level4Icon } from '../utilities/icons/diagram-3.svg';
import HyColors from '../utilities/HyColors';

// Custom legend component
const CustomLegend = (props) => {
    const { payload } = props;

    const getIcon = (entry) => {
        const style = { fill: HyColors.white };

        switch (parseInt(entry.value)) {
            case 0:
                return <Level0Icon style={style} />;
            case 1:
                return <Level1Icon style={style} />;
            case 2:
                return <Level2Icon style={style} />;
            case 3:
                return <Level3Icon style={style} />;
            case 4:
                return <Level4Icon style={style} />;
            default:
                return <Level0Icon style={style} />;
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <ul style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0 }}>
                {payload.map((entry, index) => (
                    <li
                        key={`item-${index}`}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: 16,
                            backgroundColor: entry.color,
                            padding: 4,
                            borderRadius: 5,
                        }}
                    >
                        {getIcon(entry)}
                        <span style={{ marginLeft: 8, color: '#fff' }}>{entry.value}</span>{' '}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomLegend;

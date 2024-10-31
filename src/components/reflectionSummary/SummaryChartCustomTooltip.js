import React from 'react';
import './SummaryChartCustomTooltip.css';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const CustomTooltip = ({ active, payload }) => {
    const { t } = useTranslation();

    if (active && payload?.length) {
        return (
            <div className="custom-tooltip">
                <p className="tooltip-top">
                    {' '}
                    {t('tooltip_top')} {`${payload[0].payload.id}`}{' '}
                </p>
                <p className="tooltip-bottom">
                    {' '}
                    {t('tooltip_bottom')} {`${payload[0].value}`}{' '}
                </p>
            </div>
        );
    }
    return null;
};

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
        PropTypes.shape({
            payload: PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            }),
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        }),
    ),
};

export default CustomTooltip;

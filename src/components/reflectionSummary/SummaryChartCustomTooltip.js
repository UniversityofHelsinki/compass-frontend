import React from 'react';
import './SummaryChartCustomTooltip.css';
import { useTranslation } from 'react-i18next';

const CustomTooltip = ({ active, payload }) => {
    const { t } = useTranslation();
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="tooltip-top">{t('tooltip_top')} asd </p>
                <p className="tooltip-bottom">
                    {t('tooltip_bottom')} {`${payload[0].value}`}{' '}
                </p>
            </div>
        );
    }
    return null;
};

export default CustomTooltip;

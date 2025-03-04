import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
    Tooltip,
} from 'recharts';
import { useTranslation } from 'react-i18next';
import './SummaryChart.css';
import PropTypes from 'prop-types';
import CustomTick from './SummaryChartCustomTicks';
import CustomTooltip from './SummaryChartCustomTooltip';
import HyColors from '../utilities/HyColors';

const SummaryChart = ({ assignments }) => {
    const { t } = useTranslation();
    const sortedAssignmentsData = assignments.sort((a, b) => a.assignment_id - b.assignment_id);

    return (
        <div className="chart-responsive-margins">
            <div className="chart-row">
                <div className="chart-col">
                    {assignments?.length > 0 && (
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart
                                data={sortedAssignmentsData}
                                width={730}
                                height={250}
                                margin={{ top: 5, right: 30, left: 20, bottom: 10 }}
                            >
                                <CartesianGrid strokeDasharray="1" />
                                <XAxis
                                    dataKey="assignment_id"
                                    label={{
                                        value: t('chart_x_axis_label'),
                                        dy: 15,
                                    }}
                                />
                                <YAxis
                                    dataKey="answer_order_nbr"
                                    domain={[0, 4]}
                                    tickCount={5}
                                    tick={<CustomTick />}
                                    padding={{ bottom: 40 }}
                                    tickLine={false}
                                    label={{
                                        value: t('chart_y_axis_label'),
                                        angle: -90,
                                        position: 'insideLeft',
                                        dy: -5,
                                    }}
                                />
                                <Tooltip isAnimationActive={false} content={<CustomTooltip />} />
                                <Line
                                    type="linear"
                                    dataKey="answer_order_nbr"
                                    stroke={HyColors.hudsBrandMainLight}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    )}
                </div>
            </div>
        </div>
    );
};

SummaryChart.propTypes = {
    assignments: PropTypes.array.isRequired,
};

export default SummaryChart;

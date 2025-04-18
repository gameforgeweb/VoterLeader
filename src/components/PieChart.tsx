import React from 'react';

interface PieChartProps {
  title: string;
  chartClass?: string;
}

const PieChart = ({ title, chartClass = '' }: PieChartProps) => {
  const renderLegendIcon = (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="8" fill={color} />
    </svg>
  );

  const getChartData = () => {
    switch (title) {
      case 'GENDER':
        return {
          data: [
            { label: 'Male', value: '55%', color: 'var(--majorelle-blue)' },
            { label: 'Female', value: '45%', color: 'var(--mauve)' }
          ],
          style: `conic-gradient(
            var(--majorelle-blue) 0% 55%,
            var(--mauve) 55% 100%
          )`
        };
      case 'LITERACY':
        return {
          data: [
            { label: 'Literate', value: '71%', color: 'var(--royal-blue)' },
            { label: 'Non-literate', value: '29%', color: 'var(--lavender)' }
          ],
          style: `conic-gradient(
            var(--royal-blue) 0% 71%,
            var(--lavender) 71% 100%
          )`
        };
      case 'VOTE SHARE':
        return {
          data: [
            { label: 'Progressive Front', value: '60%', color: 'var(--ultra-violet)' },
            { label: 'United Alliance', value: '40%', color: 'var(--majorelle-blue)' }
          ],
          style: `conic-gradient(
            var(--ultra-violet) 0% 60%,
            var(--majorelle-blue) 60% 100%
          )`
        };
      default:
        return { data: [], style: '' };
    }
  };

  const { data, style } = getChartData();

  return (
    <div className="chart-container">
      <h3 className="chart-title">{title}</h3>
      <div className={`pie-chart ${chartClass}`} style={{ background: style }}></div>
      <div className="legend-box">
        {data.map((item, index) => (
          <div key={index} className="legend-item">
            {renderLegendIcon(item.color)}
            <span className="legend-label">{item.label}</span>
            <span className="legend-value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart; 
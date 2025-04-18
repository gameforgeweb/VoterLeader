import React from 'react';

interface StatItem {
  label: string;
  value: string;
}

interface StatCardProps {
  title: string;
  stats: StatItem[];
}

const StatCard: React.FC<StatCardProps> = ({ title, stats }) => {
  const renderIcon = () => {
    if (title === "VOTER") {
      return (
        <svg className="title-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" 
          />
        </svg>
      );
    } else if (title === "LEADER") {
      return (
        <svg className="title-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M12 4a4 4 0 100 8 4 4 0 000-8zm0 10c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M17 10.5c2.21 0 4-1.79 4-4s-1.79-4-4-4M19.5 12.5v.5c0 1.38-2.23 2.5-5 2.5M21 15l-3-3 3-3"
          />
        </svg>
      );
    }
    return null;
  };

  return (
    <div className="stat-box">
      <h2 className="title-container">
        {renderIcon()}
        <span>{title}</span>
      </h2>
      <div className="stat-content">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-label">{stat.label}</span>
            <span className="stat-value">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatCard; 
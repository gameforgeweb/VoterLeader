import React from 'react';
import StatCard from '../components/StatCard';
import PieChart from '../components/PieChart';

const Home = () => {
  const voterStats = [
    { label: 'Total Population', value: '1.2M' },
    { label: 'Male', value: '52%' },
    { label: 'Female', value: '48%' },
    { label: 'Literacy', value: '71%' },
  ];

  const leaderStats = [
    { label: 'Name', value: 'Rakesh Yadav' },
    { label: 'Party', value: 'Progressive Front' },
    { label: 'Runner-Up', value: 'Deepa Singh' },
    { label: 'Votes', value: '98,121' },
  ];

  const genderData = [
    { name: 'Male', value: 52, color: '#2563eb' },
    { name: 'Female', value: 48, color: '#ec4899' },
  ];

  const literacyData = [
    { name: 'Literate', value: 71, color: '#22c55e' },
    { name: 'Non-literate', value: 29, color: '#64748b' },
  ];

  const voteShareData = [
    { name: 'Progressive Front', value: 60, color: '#f59e0b' },
    { name: 'United Alliance', value: 40, color: '#8b5cf6' },
  ];

  return (
    <>
      {/* Stats Cards */}
      <div className="stats-grid">
        <StatCard title="VOTER" stats={voterStats} />
        <StatCard title="LEADER" stats={leaderStats} />
      </div>
      
      {/* Charts */}
      <div className="charts-grid">
        <PieChart title="GENDER" chartClass="gender" />
        <PieChart title="LITERACY" chartClass="literacy" />
        <PieChart title="VOTE SHARE" chartClass="vote-share" />
      </div>
    </>
  );
};

export default Home; 
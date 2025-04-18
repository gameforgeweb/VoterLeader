import React from 'react';

const Logo = () => {
  return (
    <div className="logo-container">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Vote checkmark */}
        <path 
          d="M8 24L16 32L24 24"
          stroke="var(--royal-blue)" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Leader speaking */}
        <path 
          d="M32 16a4 4 0 11-8 0 4 4 0 018 0zM28 23a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          stroke="var(--majorelle-blue)" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M35 20c1.5-1.5 3-2 3-2s1.5 0.5 3 2"
          stroke="var(--majorelle-blue)" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <span className="logo-text">VoterLeader</span>
    </div>
  );
};

export default Logo; 
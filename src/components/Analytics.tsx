import React from 'react';
import type { AnalyticsStat } from '../types';

const stats: AnalyticsStat[] = [
  { label: 'Scheduled Posts', value: 12 },
  { label: 'Posts Today', value: 3 },
  { label: 'Success Rate', value: '98%' },
  { label: 'Total Posts', value: 156 }
];

const Analytics: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Analytics Overview</h2>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">{stat.label}</p>
            <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
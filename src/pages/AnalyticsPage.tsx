import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PerformanceChart from '../components/analytics/PerformanceChart';
import ScheduledPostsGrid from '../components/analytics/ScheduledPostsGrid';
import Calendar from '../components/analytics/Calendar';

const AnalyticsPage: React.FC = () => {
  return (
    <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-3 grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Upcoming Posts</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">18</p>
            <p className="text-sm text-gray-600 flex items-center">
              Scheduled for next 7 days
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Failed Posts</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">3</p>
            <p className="text-sm text-red-600 flex items-center">
              <FontAwesomeIcon icon={faExclamationCircle} className="mr-1" />
              Requires attention
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Successful Deliveries</h3>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">245</p>
            <p className="text-sm text-green-600 flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
              Last 30 days
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Posts Performance</h3>
          <div className="h-64">
            <PerformanceChart />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8 mt-8">
        <div className="col-span-3">
          <ScheduledPostsGrid />
        </div>
        <div>
          <Calendar />
        </div>
      </div>
    </main>
  );
};

export default AnalyticsPage;
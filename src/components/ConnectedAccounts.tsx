import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import type { ConnectedAccount } from '../types';

const accounts: ConnectedAccount[] = [
  { platform: 'facebook', isConnected: true },
  { platform: 'twitter', isConnected: true },
  { platform: 'instagram', isConnected: false },
  { platform: 'linkedin', isConnected: false }
];

const platformIcons = {
  facebook: { icon: faFacebookF, color: '#1877F2' },
  twitter: { icon: faTwitter, color: '#1DA1F2' },
  instagram: { icon: faInstagram, color: '#E4405F' },
  linkedin: { icon: faLinkedinIn, color: '#0A66C2' }
};

const ConnectedAccounts: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Connected Accounts</h2>
      <div className="space-y-4">
        {accounts.map((account) => (
          <div key={account.platform} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon
                icon={platformIcons[account.platform].icon}
                className={`text-[${platformIcons[account.platform].color}]`}
              />
              <span className="text-sm text-gray-700">
                {account.platform.charAt(0).toUpperCase() + account.platform.slice(1)}
              </span>
            </div>
            {account.isConnected ? (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Connected
              </span>
            ) : (
              <button className="rounded-lg text-sm text-custom hover:text-custom/90">Connect</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectedAccounts;
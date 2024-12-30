import React from 'react';
import Analytics from '../Analytics';
import ConnectedAccounts from '../ConnectedAccounts';

export function SidebarSection() {
  return (
    <div className="space-y-8">
      <Analytics />
      <ConnectedAccounts />
    </div>
  );
}
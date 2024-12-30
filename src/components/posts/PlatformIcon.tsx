import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import type { SocialPlatform } from '../../types';

interface PlatformIconProps {
  platform: SocialPlatform;
}

export const PlatformIcon: React.FC<PlatformIconProps> = ({ platform }) => {
  const icon = platform === 'facebook' ? faFacebookF : faTwitter;
  const colorClass = platform === 'facebook' ? 'text-[#1877F2]' : 'text-[#1DA1F2]';

  return (
    <FontAwesomeIcon
      icon={icon}
      className={colorClass}
    />
  );
};
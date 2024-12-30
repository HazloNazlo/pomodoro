import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faOdnoklassniki,
  faTelegram,
  faXTwitter,
  faVk
} from '@fortawesome/free-brands-svg-icons';
import clsx from 'clsx';
import type { SocialPlatform, SocialPlatformConfig } from '../types';

const platforms: SocialPlatformConfig[] = [
  { platform: 'facebook', icon: faFacebookF, color: '#1877F2' },
  { platform: 'x', icon: faXTwitter, color: '#000000' },
  { platform: 'instagram', icon: faInstagram, color: '#E4405F' },
  { platform: 'linkedin', icon: faLinkedinIn, color: '#0A66C2' },
  { platform: 'youtube', icon: faYoutube, color: '#FF0000' },
  { platform: 'odnoklassniki', icon: faOdnoklassniki, color: '#EE8208' },
  { platform: 'telegram', icon: faTelegram, color: '#26A5E4' },
  { platform: 'vkontakte', icon: faVk, color: '#0077FF' }
];

interface SocialPlatformButtonsProps {
  onChange?: (platforms: SocialPlatform[]) => void;
  selectedPlatforms: SocialPlatform[];
}

export const SocialPlatformButtons: React.FC<SocialPlatformButtonsProps> = ({ 
  onChange,
  selectedPlatforms 
}) => {
  const togglePlatform = (platform: SocialPlatform) => {
    const newSelection = selectedPlatforms.includes(platform)
      ? selectedPlatforms.filter(p => p !== platform)
      : [...selectedPlatforms, platform];
    
    onChange?.(newSelection);
  };

  return (
    <div className="flex gap-1 justify-end">
      {platforms.map(({ platform, icon, color }) => (
        <button
          key={platform}
          type="button"
          onClick={() => togglePlatform(platform)}
          className={clsx(
            'rounded-lg w-7 h-7 flex items-center justify-center transition-all duration-200',
            'border hover:opacity-90',
            selectedPlatforms.includes(platform)
              ? 'text-white border-transparent'
              : 'text-gray-400 border-gray-200 bg-transparent'
          )}
          style={{
            backgroundColor: selectedPlatforms.includes(platform) ? color : undefined
          }}
        >
          <FontAwesomeIcon icon={icon} className="text-xs" />
        </button>
      ))}
    </div>
  );
};
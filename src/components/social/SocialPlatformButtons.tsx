import React from 'react';
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
import { SOCIAL_PLATFORMS } from '../../constants/socialPlatforms';
import type { SocialPlatform } from '../../types';

interface SocialPlatformButtonsProps {
  onChange?: (platforms: SocialPlatform[]) => void;
  selectedPlatforms: SocialPlatform[];
}

export function SocialPlatformButtons({ 
  onChange,
  selectedPlatforms 
}: SocialPlatformButtonsProps) {
  const togglePlatform = (platform: SocialPlatform) => {
    const newSelection = selectedPlatforms.includes(platform)
      ? selectedPlatforms.filter(p => p !== platform)
      : [...selectedPlatforms, platform];
    
    onChange?.(newSelection);
  };

  return (
    <div className="flex gap-1 justify-end">
      {SOCIAL_PLATFORMS.map(({ platform, icon, color }) => (
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
}
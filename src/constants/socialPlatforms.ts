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
import type { SocialPlatformConfig } from '../types';

export const SOCIAL_PLATFORMS: SocialPlatformConfig[] = [
  { platform: 'facebook', icon: faFacebookF, color: '#1877F2' },
  { platform: 'x', icon: faXTwitter, color: '#000000' },
  { platform: 'instagram', icon: faInstagram, color: '#E4405F' },
  { platform: 'linkedin', icon: faLinkedinIn, color: '#0A66C2' },
  { platform: 'youtube', icon: faYoutube, color: '#FF0000' },
  { platform: 'odnoklassniki', icon: faOdnoklassniki, color: '#EE8208' },
  { platform: 'telegram', icon: faTelegram, color: '#26A5E4' },
  { platform: 'vkontakte', icon: faVk, color: '#0077FF' }
];
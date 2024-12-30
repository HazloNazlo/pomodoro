export type SocialPlatform = 
  | 'facebook'
  | 'twitter'
  | 'instagram'
  | 'linkedin'
  | 'youtube'
  | 'odnoklassniki'
  | 'telegram'
  | 'x'
  | 'vkontakte';

export interface Post {
  id: string;
  content: string;
  platforms: SocialPlatform[];
  scheduledFor: string;
  title: string;
}

export interface ConnectedAccount {
  platform: SocialPlatform;
  isConnected: boolean;
}

export interface AnalyticsStat {
  label: string;
  value: string | number;
}

export interface SocialPlatformConfig {
  platform: SocialPlatform;
  icon: any;
  color: string;
  label: string;
}

export interface CalendarPost {
  id: string;
  title: string;
  description: string;
  platform: SocialPlatform;
  scheduledFor: string;
}
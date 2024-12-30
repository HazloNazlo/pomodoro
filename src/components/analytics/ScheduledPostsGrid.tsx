import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faTiktok
} from '@fortawesome/free-brands-svg-icons';
import PostActionsMenu from '../post/PostActionsMenu';

const posts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    platforms: ['facebook', 'instagram'],
    date: 'Dec 6, 2024 at 10:00 AM',
    title: 'Summer Sale Announcement',
    description: 'Exclusive deals and discounts'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    platforms: ['twitter', 'linkedin'],
    date: 'Dec 7, 2024 at 9:00 AM',
    title: 'Weekly Newsletter',
    description: 'Industry insights and updates'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    platforms: ['facebook', 'instagram', 'twitter', 'linkedin'],
    date: 'Dec 8, 2024 at 2:00 PM',
    title: 'Product Launch',
    description: 'Introducing our latest innovation'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1664575600397-88e370cb46b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    platforms: ['facebook', 'instagram', 'tiktok'],
    date: 'Dec 9, 2024 at 11:00 AM',
    title: 'Holiday Special Offer',
    description: 'Seasonal promotions and gifts'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    platforms: ['facebook', 'linkedin'],
    date: 'Dec 10, 2024 at 3:00 PM',
    title: 'Customer Success Story',
    description: 'Real results from real clients'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    platforms: ['instagram', 'tiktok'],
    date: 'Dec 11, 2024 at 1:00 PM',
    title: 'Behind the Scenes',
    description: 'A day in our office'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1664575601786-b00156752b61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    platforms: ['facebook', 'instagram', 'twitter'],
    date: 'Dec 12, 2024 at 4:00 PM',
    title: 'Year End Wrap-up',
    description: 'Celebrating our achievements'
  }
];

const platformIcons = {
  facebook: { icon: faFacebookF, color: 'text-[#1877F2]' },
  twitter: { icon: faTwitter, color: 'text-[#1DA1F2]' },
  instagram: { icon: faInstagram, color: 'text-[#E4405F]' },
  linkedin: { icon: faLinkedinIn, color: 'text-[#0A66C2]' },
  tiktok: { icon: faTiktok, color: 'text-black' }
};

const ScheduledPostsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-7 gap-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <img src={post.image} className="my-2 rounded-lg w-full object-cover h-32" alt="" />
              <div className="flex justify-between items-center mb-2">
                <div className="flex gap-2">
                  {post.platforms.map((platform) => (
                    <FontAwesomeIcon
                      key={platform}
                      icon={platformIcons[platform].icon}
                      className={platformIcons[platform].color}
                    />
                  ))}
                </div>
                <PostActionsMenu />
              </div>
              <h4 className="text-sm font-medium text-gray-900">{post.title}</h4>
              <p className="text-xs text-gray-500">{post.description}</p>
            </div>
            <span className="text-xs text-gray-500 bg-gray-200 rounded px-2 py-1 inline-block mt-2">
              {post.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduledPostsGrid;
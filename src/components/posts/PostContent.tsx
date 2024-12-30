import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import type { Post } from '../../types';
import { formatScheduledDate } from '../../utils/dateUtils';
import { PlatformIcon } from './PlatformIcon';

interface PostContentProps {
  post: Post;
  type: 'scheduled' | 'draft';
}

export const PostContent: React.FC<PostContentProps> = ({ post, type }) => {
  const formattedDate = post.scheduled_for ? formatScheduledDate(post.scheduled_for) : null;
  
  if (type === 'scheduled') {
    return (
      <div className="flex items-center space-x-3">
        {post.platforms.map((platform) => (
          <PlatformIcon key={platform} platform={platform} />
        ))}
        <div>
          <p className="text-sm text-gray-900">{post.title}</p>
          <p className="text-xs text-gray-500">
            Scheduled for {formattedDate ? `${formattedDate.date} ${formattedDate.time}` : 'Not scheduled'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-gray-900">{post.title || 'Untitled Draft'}</p>
      <p className="text-xs text-gray-500">
        Last edited {new Date(post.updated_at || '').toLocaleDateString()}
      </p>
    </div>
  );
};
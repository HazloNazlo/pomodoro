import type { CreatePostDTO } from '../types/post';

export function validatePost(post: Partial<CreatePostDTO>): string | null {
  if (!post.title?.trim() && !post.content?.trim()) {
    return 'Please enter post content or title';
  }
  
  // Only require platforms for scheduled posts
  if (post.scheduled_for && !post.platforms?.length) {
    return 'Please select at least one platform for scheduled post';
  }

  return null;
}
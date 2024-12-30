import { useState } from 'react';
import { createPost } from '../lib/api/posts';
import { validatePost } from '../utils/validation';
import type { Post, CreatePostDTO } from '../types/post';

export function useCreatePost() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCreatePost(postData: CreatePostDTO): Promise<Post | null> {
    const validationError = validatePost(postData);
    if (validationError) {
      setError(validationError);
      return null;
    }

    try {
      setIsSubmitting(true);
      setError(null);
      const post = await createPost(postData);
      return post;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create post');
      return null;
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    createPost: handleCreatePost,
    isSubmitting,
    error,
    setError
  };
}
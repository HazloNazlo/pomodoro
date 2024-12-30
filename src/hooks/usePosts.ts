import { useState, useEffect } from 'react';
import { fetchPosts, createPost, updatePost, deletePost } from '../lib/api/posts';
import type { Post } from '../types';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    try {
      setLoading(true);
      const data = await fetchPosts();
      setPosts(data);
    } catch (err) {
      console.error('Error loading posts:', err);
      setError(err instanceof Error ? err.message : 'Failed to load posts');
    } finally {
      setLoading(false);
    }
  }

  async function addPost(post: Omit<Post, 'id'>) {
    try {
      const newPost = await createPost(post);
      setPosts(prevPosts => [newPost, ...prevPosts]);
      return newPost;
    } catch (err) {
      console.error('Error adding post:', err);
      setError(err instanceof Error ? err.message : 'Failed to create post');
      throw err;
    }
  }

  async function editPost(id: string, updates: Partial<Post>) {
    try {
      const updatedPost = await updatePost(id, updates);
      setPosts(prevPosts => 
        prevPosts.map(post => post.id === id ? updatedPost : post)
      );
      return updatedPost;
    } catch (err) {
      console.error('Error editing post:', err);
      setError(err instanceof Error ? err.message : 'Failed to update post');
      throw err;
    }
  }

  async function removePost(id: string) {
    try {
      await deletePost(id);
      setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
    } catch (err) {
      console.error('Error removing post:', err);
      setError(err instanceof Error ? err.message : 'Failed to delete post');
      throw err;
    }
  }

  return {
    posts,
    loading,
    error,
    addPost,
    editPost,
    removePost,
    refresh: loadPosts,
  };
}
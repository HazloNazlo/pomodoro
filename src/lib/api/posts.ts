import { supabase } from '../../config/supabase';
import type { Post, CreatePostDTO, UpdatePostDTO } from '../../types/post';
import { getCurrentUser } from './auth';

export async function fetchPosts(): Promise<Post[]> {
  const user = await getCurrentUser();
  if (!user) throw new Error('User must be authenticated');

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
    throw new Error(`Failed to fetch posts: ${error.message}`);
  }
  return data || [];
}

export async function createPost(post: CreatePostDTO): Promise<Post> {
  const user = await getCurrentUser();
  if (!user) throw new Error('User must be authenticated');

  // Format the scheduled_for date if it exists
  const scheduled_for = post.scheduled_for ? new Date(post.scheduled_for).toISOString() : null;

  const { data, error } = await supabase
    .from('posts')
    .insert([{
      ...post,
      scheduled_for,
      user_id: user.id,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }])
    .select()
    .single();

  if (error) {
    console.error('Error creating post:', error);
    throw new Error(`Failed to create post: ${error.message}`);
  }
  
  if (!data) throw new Error('No data returned from create post');
  return data;
}

export async function updatePost(id: string, updates: UpdatePostDTO): Promise<Post> {
  const user = await getCurrentUser();
  if (!user) throw new Error('User must be authenticated');

  // Format the scheduled_for date if it exists
  const scheduled_for = updates.scheduled_for ? new Date(updates.scheduled_for).toISOString() : null;

  const { data, error } = await supabase
    .from('posts')
    .update({
      ...updates,
      scheduled_for,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .eq('user_id', user.id)
    .select()
    .single();

  if (error) {
    console.error('Error updating post:', error);
    throw new Error(`Failed to update post: ${error.message}`);
  }
  
  if (!data) throw new Error('No data returned from update post');
  return data;
}

export async function deletePost(id: string): Promise<void> {
  const user = await getCurrentUser();
  if (!user) throw new Error('User must be authenticated');

  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) {
    console.error('Error deleting post:', error);
    throw new Error(`Failed to delete post: ${error.message}`);
  }
}
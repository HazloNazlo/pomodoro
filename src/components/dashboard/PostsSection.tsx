import React from 'react';
import { ScheduledPosts } from '../posts/ScheduledPosts';
import PostList from '../posts/PostList';
import CreatePost from '../CreatePost';
import type { Post } from '../../types/post';

interface PostsSectionProps {
  scheduledPosts: Post[];
  drafts: Post[];
  onAddPost: (post: Post) => void;
  onEditPost: (id: string, post: Partial<Post>) => void;
  onDeletePost: (id: string) => void;
}

export function PostsSection({
  scheduledPosts,
  drafts,
  onAddPost,
  onEditPost,
  onDeletePost
}: PostsSectionProps) {
  return (
    <div className="col-span-2 space-y-8">
      <CreatePost onSubmit={onAddPost} onSaveDraft={onAddPost} />
      
      <ScheduledPosts
        posts={scheduledPosts}
        onEdit={(post) => onEditPost(post.id, post)}
        onDelete={onDeletePost}
      />
      
      <PostList
        title="Drafts"
        posts={drafts}
        onEdit={(post) => onEditPost(post.id, post)}
        onDelete={onDeletePost}
        type="draft"
      />
    </div>
  );
}
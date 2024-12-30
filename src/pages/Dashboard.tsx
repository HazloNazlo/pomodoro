import React from 'react';
import { DashboardLayout } from '../components/layouts/DashboardLayout';
import { PostsSection } from '../components/dashboard/PostsSection';
import { SidebarSection } from '../components/dashboard/SidebarSection';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { ErrorAlert } from '../components/common/ErrorAlert';
import { usePosts } from '../hooks/usePosts';

const Dashboard: React.FC = () => {
  const { 
    posts, 
    loading, 
    error, 
    addPost, 
    editPost, 
    removePost 
  } = usePosts();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorAlert message={error} />;
  }

  // Correctly categorize posts based on scheduled_for field
  const scheduledPosts = posts.filter(post => post.scheduled_for !== null);
  const drafts = posts.filter(post => post.scheduled_for === null);

  return (
    <DashboardLayout>
      <PostsSection
        scheduledPosts={scheduledPosts}
        drafts={drafts}
        onAddPost={addPost}
        onEditPost={editPost}
        onDeletePost={removePost}
      />
      <SidebarSection />
    </DashboardLayout>
  );
};

export default Dashboard;
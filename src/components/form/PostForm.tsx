import React, { useState, useEffect } from 'react';
import { SocialPlatformButtons } from '../social/SocialPlatformButtons';
import MediaUpload from '../media/MediaUpload';
import ScheduleInputs from './ScheduleInputs';
import FormButtons from './FormButtons';
import PostTitleInput from './PostTitleInput';
import PostContentInput from './PostContentInput';
import { useCreatePost } from '../../hooks/useCreatePost';
import { useMediaUpload } from '../../hooks/useMediaUpload';
import { getDefaultScheduleTime, formatScheduledDate } from '../../utils/dateUtils';
import type { Post, CreatePostDTO } from '../../types/post';
import type { SocialPlatform } from '../../types';

interface PostFormProps {
  onSubmit?: (post: Post) => void;
  onSaveDraft?: (post: Post) => void;
  initialData?: Post;
  onClose?: () => void;
}

export function PostForm({ 
  onSubmit, 
  onSaveDraft, 
  initialData,
  onClose 
}: PostFormProps) {
  const defaultSchedule = getDefaultScheduleTime();
  const initialSchedule = initialData?.scheduled_for 
    ? formatScheduledDate(initialData.scheduled_for)
    : defaultSchedule;

  const [content, setContent] = useState(initialData?.content || '');
  const [date, setDate] = useState(initialSchedule.date);
  const [time, setTime] = useState(initialSchedule.time);
  const [title, setTitle] = useState(initialData?.title || '');
  const [selectedPlatforms, setSelectedPlatforms] = useState<SocialPlatform[]>(
    initialData?.platforms || []
  );
  const [selectedMedia, setSelectedMedia] = useState<File[]>([]);
  const [mediaUrls, setMediaUrls] = useState<string[]>(initialData?.media_urls || []);

  const { createPost, isSubmitting, error } = useCreatePost();
  const { uploadFiles, uploading } = useMediaUpload();

  const handleMediaSelect = (files: FileList) => {
    setSelectedMedia(Array.from(files));
  };

  const createPostData = async (isDraft: boolean): Promise<CreatePostDTO> => {
    let urls = mediaUrls;
    if (selectedMedia.length > 0) {
      urls = await uploadFiles(selectedMedia);
    }

    return {
      content,
      title,
      platforms: selectedPlatforms,
      scheduled_for: !isDraft && date && time ? `${date}T${time}:00Z` : null,
      media_urls: urls
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time) {
      return;
    }
    try {
      const postData = await createPostData(false);
      const post = await createPost(postData);
      if (post) {
        onSubmit?.(post);
        onClose?.();
      }
    } catch (err) {
      console.error('Failed to create post:', err);
    }
  };

  const handleSaveDraft = async () => {
    try {
      const postData = await createPostData(true);
      const post = await createPost(postData);
      if (post) {
        onSaveDraft?.(post);
        onClose?.();
      }
    } catch (err) {
      console.error('Failed to save draft:', err);
    }
  };

  const hasDateTime = Boolean(date && time);
  const isFormValid = Boolean(content.trim() || title.trim());

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col space-y-4">
        <PostTitleInput value={title} onChange={setTitle} />
        <MediaUpload 
          onMediaSelect={handleMediaSelect} 
          selectedMedia={selectedMedia}
          existingUrls={mediaUrls}
        />
        <PostContentInput value={content} onChange={setContent} />
      </div>

      <ScheduleInputs
        date={date}
        time={time}
        onDateChange={setDate}
        onTimeChange={setTime}
      />

      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Post to</h3>
        <SocialPlatformButtons 
          onChange={setSelectedPlatforms}
          selectedPlatforms={selectedPlatforms}
        />
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <FormButtons
        onSaveDraft={handleSaveDraft}
        isSubmitDisabled={!isFormValid || uploading}
        isSubmitting={isSubmitting || uploading}
        hasDateTime={hasDateTime}
      />
    </form>
  );
}
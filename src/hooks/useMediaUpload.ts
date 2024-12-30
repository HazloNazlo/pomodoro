import { useState } from 'react';
import { uploadMedia } from '../lib/storage/mediaStorage';
import { useAuth } from '../contexts/AuthContext';

export function useMediaUpload() {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const uploadFiles = async (files: File[]): Promise<string[]> => {
    if (!user) throw new Error('User must be authenticated');
    
    setUploading(true);
    setError(null);
    
    try {
      const uploadPromises = files.map(file => uploadMedia(file, user.id));
      const urls = await Promise.all(uploadPromises);
      return urls;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload media');
      throw err;
    } finally {
      setUploading(false);
    }
  };

  return { uploadFiles, uploading, error };
}
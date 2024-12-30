/*
  # Add media support to posts table

  1. Changes
    - Add media_urls column to posts table to store uploaded media URLs
    - Add storage bucket for post media files
*/

-- Add media_urls column to posts table
ALTER TABLE posts ADD COLUMN IF NOT EXISTS media_urls TEXT[] DEFAULT '{}';

-- Create storage bucket for post media
INSERT INTO storage.buckets (id, name, public)
VALUES ('post-media', 'post-media', true)
ON CONFLICT (id) DO NOTHING;

-- Allow authenticated users to upload media
CREATE POLICY "Users can upload their own media"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'post-media' AND 
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Allow public access to media files
CREATE POLICY "Anyone can view media"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'post-media');
/*
  # Create Posts Table

  1. New Tables
    - `posts`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to auth.users)
      - `title` (text)
      - `content` (text, nullable)
      - `platforms` (text array)
      - `scheduled_for` (timestamptz, nullable)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `posts` table
    - Add policies for:
      - Insert: Users can create their own posts
      - Select: Users can view their own posts
      - Update: Users can update their own posts
      - Delete: Users can delete their own posts
*/

-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  title TEXT NOT NULL,
  content TEXT,
  platforms TEXT[] NOT NULL DEFAULT '{}',
  scheduled_for TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can insert their own posts"
  ON posts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own posts"
  ON posts FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own posts"
  ON posts FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own posts"
  ON posts FOR DELETE
  USING (auth.uid() = user_id);

-- Create index for user_id for faster queries
CREATE INDEX IF NOT EXISTS posts_user_id_idx ON posts(user_id);

-- Create index for scheduled_for to optimize scheduled post queries
CREATE INDEX IF NOT EXISTS posts_scheduled_for_idx ON posts(scheduled_for);
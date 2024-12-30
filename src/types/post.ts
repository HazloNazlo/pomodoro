export interface Post {
  id: string;
  title: string;
  content: string;
  platforms: string[];
  scheduled_for: string | null;
  media_urls?: string[];
  created_at?: string;
  updated_at?: string;
}

export type CreatePostDTO = Omit<Post, 'id' | 'created_at' | 'updated_at'>;
export type UpdatePostDTO = Partial<CreatePostDTO>;
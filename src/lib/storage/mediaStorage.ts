import { supabase } from '../../config/supabase';
import { v4 as uuidv4 } from 'uuid';

export async function uploadMedia(file: File, userId: string): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${uuidv4()}.${fileExt}`;
  const filePath = `${userId}/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('post-media')
    .upload(filePath, file);

  if (uploadError) {
    throw new Error(`Error uploading file: ${uploadError.message}`);
  }

  const { data } = supabase.storage
    .from('post-media')
    .getPublicUrl(filePath);

  return data.publicUrl;
}
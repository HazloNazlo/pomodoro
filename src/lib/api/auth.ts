import { supabase } from '../../config/supabase';
import type { User, AuthResponse } from '@supabase/supabase-js';

export async function getCurrentUser(): Promise<User | null> {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function signUp(email: string, password: string): Promise<AuthResponse> {
  const response = await supabase.auth.signUp({
    email,
    password,
  });

  if (response.error) throw response.error;
  return response;
}

export async function signIn(email: string, password: string): Promise<AuthResponse> {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (response.error) throw response.error;
  return response;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function resetPassword(email: string) {
  const { error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) throw error;
}
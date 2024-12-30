import { supabase } from '../../config/supabase';
import type { AuthError } from '@supabase/supabase-js';

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  
  if (error) throw formatAuthError(error);
  return data;
}

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`
    }
  });
  
  if (error) throw formatAuthError(error);
  return data;
}

function formatAuthError(error: AuthError): Error {
  switch (error.message) {
    case 'Invalid login credentials':
      return new Error('Invalid email or password');
    case 'User already registered':
      return new Error('An account with this email already exists');
    case 'Password should be at least 6 characters':
      return new Error('Password must be at least 6 characters long');
    default:
      return new Error(error.message);
  }
}
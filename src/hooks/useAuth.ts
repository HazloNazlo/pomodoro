import { useState } from 'react';
import { signInWithEmail, signUpWithEmail, signInWithGoogle, signOut } from '../lib/auth';

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAuth = async (authFn: () => Promise<any>) => {
    try {
      setLoading(true);
      setError(null);
      await authFn();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const login = (email: string, password: string) => 
    handleAuth(() => signInWithEmail(email, password));

  const register = (email: string, password: string) => 
    handleAuth(() => signUpWithEmail(email, password));

  const loginWithGoogle = () => 
    handleAuth(signInWithGoogle);

  const logout = () => 
    handleAuth(signOut);

  return {
    login,
    register,
    loginWithGoogle,
    logout,
    loading,
    error
  };
}
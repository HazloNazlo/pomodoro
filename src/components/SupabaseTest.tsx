import React, { useEffect, useState } from 'react';
import { supabase } from '../config/supabase';

export function SupabaseTest() {
  const [status, setStatus] = useState<'loading' | 'connected' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    async function testConnection() {
      try {
        // Test the connection by making a simple query
        const { data, error } = await supabase
          .from('posts')
          .select('count')
          .limit(1);

        if (error) {
          console.error('Supabase error:', error);
          throw new Error(`Database error: ${error.message}`);
        }

        // If we get here, the connection is successful
        setStatus('connected');
      } catch (err) {
        console.error('Connection test error:', err);
        setStatus('error');
        setErrorMessage(err instanceof Error ? err.message : 'Unknown error occurred');
      }
    }

    testConnection();
  }, []);

  if (status === 'loading') {
    return (
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md mt-8">
        <h2 className="text-xl font-bold mb-4">Supabase Connection Test</h2>
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md mt-8">
      <h2 className="text-xl font-bold mb-4">Supabase Connection Test</h2>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="font-medium">Status:</span>
          <span className={`px-2 py-1 rounded-full text-sm ${
            status === 'connected' 
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {status === 'connected' ? 'Connected' : 'Error'}
          </span>
        </div>

        {status === 'error' && (
          <div className="text-sm text-red-600 break-words">
            Error: {errorMessage}
          </div>
        )}

        {status === 'connected' && (
          <div className="text-sm text-green-600">
            Successfully connected to Supabase!
          </div>
        )}
      </div>
    </div>
  );
}
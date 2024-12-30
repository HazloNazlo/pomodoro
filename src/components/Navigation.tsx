import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Image } from 'lucide-react';
import AuthModals from './auth/AuthModals';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../config/supabase';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const { user } = useAuth();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Image className="h-8 w-8" />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to="/"
                  className={`${
                    location.pathname === '/'
                      ? 'border-custom text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/analytics"
                  className={`${
                    location.pathname === '/analytics'
                      ? 'border-custom text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Analytics
                </Link>
                <Link
                  to="/calendar"
                  className={`${
                    location.pathname === '/calendar'
                      ? 'border-custom text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  Calendar
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-300"
                >
                  Sign out
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setIsSignInOpen(true)}
                    className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-300"
                  >
                    Sign in
                  </button>
                  <button
                    onClick={() => setIsSignUpOpen(true)}
                    className="rounded-lg ml-3 bg-custom px-4 py-2 text-sm font-medium text-white hover:bg-custom/90"
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <AuthModals
        isSignInOpen={isSignInOpen}
        isSignUpOpen={isSignUpOpen}
        onCloseSignIn={() => setIsSignInOpen(false)}
        onCloseSignUp={() => setIsSignUpOpen(false)}
      />
    </>
  );
};

export default Navigation;
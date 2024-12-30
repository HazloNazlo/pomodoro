import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

interface AuthModalsProps {
  isSignInOpen: boolean;
  isSignUpOpen: boolean;
  onCloseSignIn: () => void;
  onCloseSignUp: () => void;
}

const AuthModals: React.FC<AuthModalsProps> = ({
  isSignInOpen,
  isSignUpOpen,
  onCloseSignIn,
  onCloseSignUp,
}) => {
  const handleSwitchToSignUp = () => {
    onCloseSignIn();
    onCloseSignUp();
  };

  const handleSwitchToSignIn = () => {
    onCloseSignUp();
    onCloseSignIn();
  };

  return (
    <>
      {isSignInOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <SignInForm onClose={onCloseSignIn} onSwitchToSignUp={handleSwitchToSignUp} />
        </div>
      )}

      {isSignUpOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <SignUpForm onClose={onCloseSignUp} onSwitchToSignIn={handleSwitchToSignIn} />
        </div>
      )}
    </>
  );
};

export default AuthModals;
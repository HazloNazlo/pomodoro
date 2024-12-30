import React from 'react';
import { X } from 'lucide-react';
import { useAuthForm } from '../../hooks/useAuthForm';
import { signUp } from '../../lib/auth/authService';
import AuthFormInput from './AuthFormInput';

interface SignUpFormProps {
  onClose: () => void;
  onSwitchToSignIn: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onClose, onSwitchToSignIn }) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    handleSubmit
  } = useAuthForm({
    onSubmit: signUp,
    onSuccess: onClose
  });

  return (
    <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full m-4 p-8 min-h-[580px] flex flex-col justify-center">
      <div className="flex flex-col mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Create an account</h3>
        <p className="text-gray-600 text-xs mt-1 mb-4">
          Schedule your social media posts and monitor engagement with Postlater's powerful analytics.
        </p>
        <button
          className="text-gray-400 hover:text-gray-500 absolute top-6 right-6"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthFormInput
          type="email"
          label="Email"
          value={email}
          onChange={setEmail}
          required
        />

        <AuthFormInput
          type="password"
          label="Password"
          value={password}
          onChange={setPassword}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-custom text-white rounded-lg px-6 py-3 font-semibold hover:bg-custom/90 transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-50"
        >
          {loading ? 'Creating account...' : 'Sign up with Email'}
        </button>

        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{' '}
          <button onClick={onSwitchToSignIn} className="text-custom hover:underline">
            Sign in
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
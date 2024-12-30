import React from 'react';

interface AuthFormInputProps {
  type: 'email' | 'password';
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const AuthFormInput: React.FC<AuthFormInputProps> = ({
  type,
  label,
  value,
  onChange,
  required
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-custom focus:border-custom transition-all duration-200"
        placeholder={`Enter your ${label.toLowerCase()}`}
        required={required}
      />
    </div>
  );
};

export default AuthFormInput;
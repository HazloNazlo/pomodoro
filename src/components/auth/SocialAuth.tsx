import React from 'react';

const SocialAuth: React.FC = () => {
  return (
    <>
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-500 text-sm font-medium">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 hover:shadow-sm transition-all duration-200 space-x-2 font-medium">
          <img src="https://www.google.com/favicon.ico" className="h-5 w-5" alt="Google" />
          <span>Google</span>
        </button>
        <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 hover:shadow-sm transition-all duration-200 space-x-2 font-medium">
          <img src="https://vk.com/favicon.ico" className="h-5 w-5" alt="VK" />
          <span>VK</span>
        </button>
        <button className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 hover:shadow-sm transition-all duration-200 space-x-2 font-medium">
          <img src="https://yandex.com/favicon.ico" className="h-5 w-5" alt="Yandex" />
          <span>Yandex</span>
        </button>
      </div>
    </>
  );
};

export default SocialAuth;
import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cherry-50 via-white to-primary-50 flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* Loading Animation */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-cherry-200 border-t-cherry-500 rounded-full animate-spin"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
            🌸
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Loading Korean With Us
          </h2>
          <div className="korean-text text-cherry-600 font-medium">
            로딩 중...
          </div>
        </div>
      </div>
    </div>
  );
}
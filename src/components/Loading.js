import React from 'react';

function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-black/50  flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-customColor" />
    </div>
  );
}

export default Loading;
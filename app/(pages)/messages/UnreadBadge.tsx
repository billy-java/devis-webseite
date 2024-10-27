// components/UnreadBadge.tsx
import React from 'react';

type UnreadBadgeProps = {
  count: number;
};

const UnreadBadge: React.FC<UnreadBadgeProps> = ({ count }) => {
  if (count === 0) return null;

  return (
    <div className="flex items-center justify-center h-6 w-6 bg-red-500 text-white text-xs rounded-full absolute top-2 right-2">
      {count}
    </div>
  );
};

export default UnreadBadge;

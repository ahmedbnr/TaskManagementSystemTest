import React from 'react';

// Tag props
interface TagProps {
  completed: boolean;
}

// Tag Component
const Tag: React.FC<TagProps> = ({ completed }) => {
  return (
    <span className={`px-2 py-1 rounded text-white ${completed ? 'bg-green-500' : 'bg-red-500'}`}>
      {completed ? 'Complete' : 'Incomplete'}
    </span>
  );
};

export default Tag;

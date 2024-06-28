import React from 'react';
import Chip from '@mui/material/Chip';
import { SxProps } from '@mui/system';

// Tag props
interface TagProps {
  completed: boolean;
  className?: string;
  sx?: SxProps;
}

// Tag Component
const Tag: React.FC<TagProps> = ({ completed, className, sx }) => {
  return (
    <Chip
      label={completed ? 'Completed' : 'Incomplete'}
      color={completed ? 'success' : 'default'}
      className={className}
      sx={sx}
    />
  );
};

export default Tag;

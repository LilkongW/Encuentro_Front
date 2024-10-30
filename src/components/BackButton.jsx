import React from 'react';
import { IconButton } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';

export default function BackButton() {
  const handleReload = () => {
    window.location.href = '/'; // Navega y recarga la página de inicio
  };

  return (
    <IconButton
      onClick={handleReload}  // Llama a handleReload en lugar de Link
      color="primary"
      aria-label="back to page 1"
      sx={{
        color: "white",
        width: 80, 
        height: 80, 
      }}
    >
      <LoopIcon sx={{ fontSize: 60 }} />
    </IconButton>
  );
}

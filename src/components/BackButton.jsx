import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';

export default function BackButton() {
  return (
    <IconButton
      component={Link}
      to="/"
      color="primary"
      aria-label="back to page 1"
      sx={{
        width: 80, // Ancho del botón
        height: 80, // Alto del botón
      }}
    >
      <LoopIcon sx={{ fontSize: 60 }} /> {/* Ajusta el tamaño del ícono */}
    </IconButton>
  );
}

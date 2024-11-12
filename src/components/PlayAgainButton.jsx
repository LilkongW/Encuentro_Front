import React from 'react';
import { IconButton } from '@mui/material';

import LoopIcon from '@mui/icons-material/Loop';

export default function PlayAgainButton() {
  const handleReload = () => {
    window.location.reload(); // Navega y recarga la página de inicio
  };
  
  return (
    <IconButton
      onClick={handleReload}
      aria-label="back to page 1"
      sx={{
        width: 80, 
        height: 80, 
        backgroundColor: "white", // Fondo blanco para el botón
        color: "#0075f2", // Color azul para el ícono
        borderRadius: "50%", // Hace el botón redondo
        boxShadow: 3, // Sombra para dar un efecto de botón flotante
        '&:hover': {
          backgroundColor: "#f0f0f0" // Color de fondo al pasar el mouse
        }
      }}
    >
      <LoopIcon sx={{ fontSize: 60 }} />
    </IconButton>
  );
}

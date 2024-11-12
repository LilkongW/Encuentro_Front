import React from 'react';
import { Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Page5button() {
  const navigate = useNavigate(); // Hook para la navegación

  const handleNavigateToPage5 = () => {
    navigate('/page5'); // Cambia '/page5' por la ruta correcta de tu página 5
  };

  return (
    <Box sx={{ position: 'fixed', right: 0, top: '40%', marginRight: "12px", justifyItems: "center", display: "flex", alignItems: "center" }}>
      <IconButton
        onClick={handleNavigateToPage5}
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
        <ArrowForwardIcon sx={{ fontSize: 60 }} />
      </IconButton>
    </Box>

  );
}



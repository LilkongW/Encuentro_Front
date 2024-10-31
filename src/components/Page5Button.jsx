import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Page5button() {
  const navigate = useNavigate(); // Hook para la navegación

  const handleNavigateToPage5 = () => {
    navigate('/page5'); // Cambia '/page5' por la ruta correcta de tu página 5
  };

  return (
    <Box sx={{ position: 'fixed', right: 0, top: '40%', marginRight: "25px", justifyItems: "center", display: "flex", alignItems: "center" }}>
      <Button
        variant="contained"
        color="primary"
        sx={{
          height: '56px',
          fontFamily: 'Bebas Neue Cyrillic',
          fontSize: '2rem',
          color: '#0075f2',
          border: '2px solid white',
          borderRadius: '50px',
          padding: '10px 40px',
          backgroundColor: '#FFFFFF',
          textTransform: 'none',
          transition: 'background-color 0.3s ease, transform 0.3s ease',
          '&:hover': {
            backgroundColor: '#0075f2',
            color: 'white',
            transform: 'scale(1.05)',
          },
          marginRight: 2, // Espacio entre el botón y el temporizador
        }}
        onClick={handleNavigateToPage5} // Agrega la función al evento onClick
      >
        ¿Quieres un mejor reto?
      </Button>
    </Box>
  );
}

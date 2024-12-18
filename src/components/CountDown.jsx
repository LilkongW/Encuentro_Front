import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
function CountdownButton({ onCountdownFinish }) {
  const [countdown, setCountdown] = useState(null); // Estado para el tiempo restante

  const startCountdown = () => {
    setCountdown(5); // Inicia el contador en 5 segundos
  };

  // Efecto para manejar el temporizador
  useEffect(() => {
    if (countdown === 0) {
      console.log('¡El tiempo ha terminado!');
      setCountdown(null); // Detiene el temporizador cuando llega a cero
      
      if (onCountdownFinish) {
        onCountdownFinish(); // Llama a la función onCountdownFinish si está definida
      }
    }
    
    if (countdown !== null && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timer); // Limpia el temporizador al desmontar o reiniciar el efecto
    }
  }, [countdown, onCountdownFinish]);

  return (
    <Box
      sx={{ 
        display: "flex", 
        flexDirection: "column", // Organiza los elementos en columna
        alignItems: "center", 
        marginLeft: "40px"
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={startCountdown}
        sx={{
          height: '100px',

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
          marginBottom: 2, // Espacio entre el botón y el temporizador
        }}
      >
        <Typography
          sx={{ 
            fontFamily: 'Bebas Neue Cyrillic', 
            fontSize: "3rem" 
          }}
        >
          TIEMPO!
        </Typography>

        <AccessTimeIcon
        sx={{marginLeft:"20px",
          width:"70px",
          height:"70px"
        }}
        />
      </Button>
      {countdown !== null && (
        <Typography 
          variant="h5" 
          sx={{ 
            fontFamily: 'Bebas Neue Cyrillic', 
            color: '#FFFFFF', 
            fontSize: "5rem" 
          }}
        >
          {countdown} s
        </Typography>
      )}
    </Box>
  );
}

export default CountdownButton;

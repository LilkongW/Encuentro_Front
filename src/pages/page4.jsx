import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import BackButton from '../components/BackButton';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function Page4() {
  const [signImage, setSignImage] = useState('');
  const [word, setWord] = useState('');
  const [stream, setStream] = useState(null);
  const [fade, setFade] = useState(0); // Estado para controlar la opacidad

  useEffect(() => {
    const simulatedImage = 'url_de_imagen_inferencia';
    setSignImage(simulatedImage);
    setWord('SEÑA');

    // Iniciar el efecto de desvanecimiento
    setFade(1); // Cambia a 1 para que se vea al final del efecto
  }, []);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        setStream(stream);
        const videoElement = document.getElementById('video');
        if (videoElement) {
          videoElement.srcObject = stream;
        }
      })
      .catch(err => {
        console.error("Error al obtener el video:", err);
      });
  }, []);

  // Función para refrescar la página
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <Container sx={{ minHeight: '100vh', position: 'relative', opacity: fade, transition: 'opacity 1s ease' }}>
      <Typography variant="h4" gutterBottom sx={{
        fontFamily: 'Bebas Neue Cyrillic',
        color: 'white',
        textAlign: "center",
        fontSize: "7rem",
        marginBottom: "-40px"
      }}>
        ¿Listo para un pequeño juego?
      </Typography>

      <Grid container spacing={2} sx={{ height: '70vh', alignItems: 'center', justifyContent: 'center' }}>
        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              width: '350px',
              height: '350px',
              bgcolor: 'lightgray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 2,
              borderRadius: '8px',
            }}
          >
            <video id="video" autoPlay style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
          </Box>
        </Grid>

        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              boxShadow: 3,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              transform: 'scale(1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Bebas Neue Cyrillic',
                fontSize: '10rem',
                color: '#0075f2',
                textAlign: 'center',
                transition: 'color 0.3s ease',
                '&:hover': { color: '#ffcc00' }
              }}
            >
              Y
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Typography sx={{
          fontFamily: 'Bebas Neue Cyrillic',
          color: 'white',
          fontSize: '8rem',
          fontWeight: 'bold',
          marginTop: "-80px",
        }}>
          {word}
        </Typography>
        <CheckBoxIcon sx={{ color: 'white', fontSize: '8rem', marginTop: "-95px", }} />
      </Box>

      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          display: 'flex',
          gap: 2, // Espacio entre los botones
          alignItems: 'center', // Alineación vertical de los botones
        }}
      >
        {/* Botón de refresco */}
        <Button
          variant="contained"
          color="primary"
          onClick={refreshPage}
          sx={{
            height: '56px', // Altura fija para alinear los botones
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
              backgroundColor: '#0075f2', // Cambia el color de fondo al pasar el ratón
              color: 'white', // Cambia el color del texto al pasar el ratón
              transform: 'scale(1.05)', // Aumenta el tamaño del botón al pasar el ratón
            },
          }}
        >
          ¡Jugar de nuevo!
        </Button>

        <BackButton />
      </Box>
    </Container>
  );
}

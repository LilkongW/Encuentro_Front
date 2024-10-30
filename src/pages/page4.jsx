import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import BackButton from '../components/BackButton';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function Page3() {
  // Estado para manejar la imagen de la seña traducida
  const [signImage, setSignImage] = useState('');
  const [word, setWord] = useState('');  // Estado para la palabra construida
  const [stream, setStream] = useState(null);  // Estado para el video stream

  // Simulación de recibir datos del backend
  useEffect(() => {
    // Simular la imagen de la seña traducida
    const simulatedImage = 'url_de_imagen_inferencia';  // Solo una imagen
    setSignImage(simulatedImage);
    
    // Simular la palabra formada
    setWord('SEÑA');  // La palabra que representa la seña
  }, []);

  // Obtener el video en vivo del usuario
  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        setStream(stream);  // Guardar el stream en el estado
        const videoElement = document.getElementById('video');
        if (videoElement) {
          videoElement.srcObject = stream;  // Asignar el stream al video
        }
      })
      .catch(err => {
        console.error("Error al obtener el video:", err);
      });
  }, []);

  return (
    <Container sx={{ minHeight: '100vh', position: 'relative', paddingTop: 4 }}>
      <Typography variant='h4' gutterBottom sx={{marginBottom:"10px"}}>
        ¿Listo para un pequeño juego?
      </Typography>

      {/* División en dos partes */}
      <Grid container spacing={2} sx={{ height: '70vh' }}> {/* Ajusta la altura según necesites */}
        
        {/* Columna izquierda para el stream */}
        <Grid item xs={12} md={6}>
          <Box 
            sx={{ 
              width: '100%', 
              height: '100%', 
              bgcolor: 'lightgray', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center' 
            }}
          >
            {/* Video en vivo */}
            <video id="video" autoPlay style={{ width: '100%', height: '100%' }} />
          </Box>
        </Grid>

        {/* Columna derecha para la imagen de la seña */}
        <Grid item xs={12} md={6}>
          <Box 
            sx={{ 
              width: '100%', 
              height: '100%', 
              bgcolor: 'lightgray', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              flexDirection: 'column',
              gap: 2
            }}
          >
            {/* Imagen de la seña inferida */}
            <Box component="img" src={signImage} alt="Seña traducida" sx={{ maxWidth: '100%', maxHeight: '100%' }} />
          </Box>
        </Grid>
      </Grid>

      {/* Palabra construida */}
      <Box sx= {{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"40px"}}>
        <Typography marginRight={"10px"}>
            {word}
        </Typography>
        <CheckBoxIcon/>
      </Box>

      {/* Posiciona el BackButton en la parte inferior derecha */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
      >
        <BackButton />
      </Box>
    </Container>
  );
}

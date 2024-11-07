import React, { useEffect, useState, useRef } from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import BackButton from '../components/BackButton';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function Page5() {
  const [signImage, setSignImage] = useState('');
  const [word, setWord] = useState('');
  const [stream, setStream] = useState(null);
  const [fade, setFade] = useState(0); // Estado para controlar la opacidad
  const [checkBoxColor, setCheckBoxColor] = useState('white'); // Estado para controlar el color del CheckBoxIcon
  const [palabra, setPalabra] = useState(null); 
  const videoRef = useRef(null);

  useEffect(() => {
    const simulatedImage = 'url_de_imagen_inferencia';
    setSignImage(simulatedImage);
    
    // Lista de palabras
    const wordsList = ["Buenas Noches", "Adios", "Hola"];
    
    // Seleccionar una palabra aleatoria de la lista
    const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    setWord(randomWord);

    // Iniciar el efecto de desvanecimiento
    setFade(1); // Cambia a 1 para que se vea al final del efecto
  }, []);


  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws/video");

    ws.onmessage = (event) => {
        const message = JSON.parse(event.data); // Parsear el JSON recibido
        const frameBase64 = message.frame;
        const palabra = message.a;
        
        // Actualiza el valor de a
        setPalabra(palabra);
        // Convierte el frame base64 a una URL de imagen
        const imgBlob = new Blob([new Uint8Array(atob(frameBase64).split("").map(c => c.charCodeAt(0)))], { type: "image/jpeg" });
        const url = URL.createObjectURL(imgBlob);

        // Asigna la URL de la imagen al src del video
        if (videoRef.current) {
            videoRef.current.src = url;
        }
        
    };
    
    return () => ws.close();
  }, []);

  // Función para refrescar la página
  const refreshPage = () => {
    window.location.reload();
  };

  // Función para verificar la palabra ingresada
  const checkWord = (inputWord) => {
    if (inputWord === word) {
      setCheckBoxColor('green'); // Cambiar a verde si la palabra coincide
    } else {
      setCheckBoxColor('white'); // Restablecer a blanco si no coincide
    }
  };

  // Para simular la entrada de la palabra por consola (puedes reemplazar esto con un input real)
  useEffect(() => {
    console.log ("palabra", palabra);
    checkWord(palabra); // Verificar la palabra ingresada
  }, [word]);

  return (
    <Container sx={{ minHeight: '100vh', position: 'relative', opacity: fade, transition: 'opacity 1s ease', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h4" gutterBottom sx={{
        fontFamily: 'Bebas Neue Cyrillic',
        color: 'white',
        textAlign: "center",
        fontSize: "7rem",
        marginBottom: "-40px"
      }}>
        ¡Probemos con Palabras!
      </Typography>

      <Grid container sx={{ height: '70vh', alignItems: 'center', justifyContent: 'center', mb:"20px" }}>
        <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              width: '500px',
              height: '500px',
              bgcolor: 'lightgray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 2,
              borderRadius: '8px',
            }}
          >
            <img ref={videoRef} alt="Video Stream" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
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
        <CheckBoxIcon sx={{ color: checkBoxColor, fontSize: '8rem', marginTop: "-95px" }} />
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

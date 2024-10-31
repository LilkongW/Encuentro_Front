import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid, Button, TextField } from '@mui/material';
import BackButton from '../components/BackButton';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel'; // Icono para indicar que se ha perdido
import CountdownButton from '../components/CountDown';
import Page5button from '../components/Page5Button';

export default function Page4() {
  const [signImage, setSignImage] = useState('');
  const [word, setWord] = useState('');
  const [stream, setStream] = useState(null);
  const [fade, setFade] = useState(0);
  const [displayedLetters, setDisplayedLetters] = useState("");
  const [gameStatus, setGameStatus] = useState(null); // 'win' o 'lose'
  const [inputLetter, setInputLetter] = useState(''); // Nuevo estado para la letra del input

  useEffect(() => {
    const wordsList = ['sol', 'amor', 'luna']; // Todas las palabras en minúsculas
    const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    setWord(randomWord);
    setFade(1);
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

  const handleCountdownFinish = () => {
    if (inputLetter && displayedLetters.length < word.length) {
      const lowerCaseInput = inputLetter.toLowerCase(); // Convertir la letra del input a minúsculas
      const currentWord = displayedLetters + lowerCaseInput; // Combina displayedLetters con la nueva letra
      setDisplayedLetters(currentWord); // Actualiza displayedLetters con el currentWord
      setInputLetter(''); // Limpiar el input después de usarlo
  
      // Verificamos si se ha formado la palabra
      if (currentWord === word) {
        setGameStatus('win'); // Cambiamos el estado a 'win' si se forma la palabra
        return; // Detener ejecución aquí si ganaste
      } 
      
      // Verificamos si se ha perdido
      if (currentWord.length > word.length || 
          !word.startsWith(currentWord)) { // Comprobar si currentWord es prefijo de word
        setGameStatus('lose'); // Si la letra ingresada no coincide con la palabra
        return; // Detener la ejecución aquí
      }
    } else {
      setGameStatus('lose'); // Si se termina el conteo sin completar la palabra
    }
  };
  
  

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
      <Typography
        sx={{
          fontFamily: 'Bebas Neue Cyrillic',
          color: 'white',
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "-40px",
          marginTop: "20px",
        }}
      >
        Tu palabra es: {word}
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

        <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField 
            label="Escribe una letra" 
            value={inputLetter} 
            onChange={(e) => setInputLetter(e.target.value)} // Actualiza el estado del input
            variant="outlined" 
            sx={{ margin: '20px auto', width: '200px' }}
          />
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
              {inputLetter || ''} {/* Muestra solo la letra del input */}
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
          {displayedLetters}
        </Typography>
        {gameStatus === 'win' ? (
          <CheckBoxIcon sx={{ color: 'green', fontSize: '8rem', marginTop: "-95px", }} />
        ) : gameStatus === 'lose' ? (
          <CancelIcon sx={{ color: 'red', fontSize: '8rem', marginTop: "-95px", }} /> // Icono para perder
        ) : null}
      </Box>

      <Box sx={{ position: 'fixed', left: 0, top: '40%' }}>
        <CountdownButton onCountdownFinish={handleCountdownFinish} />
      </Box>
      
      <Page5button/>
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          display: 'flex',
          gap: 2,
          alignItems: 'center',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={refreshPage}
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
          }}
        >
          ¡Jugar de nuevo!
        </Button>

        <BackButton />
      </Box>
    </Container>
  );
}

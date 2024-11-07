import React, { useEffect, useState, useRef } from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import BackButton from '../components/BackButton';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import CountdownButton from '../components/CountDown';
import Page5button from '../components/Page5Button';

export default function Page4() {
  const [word, setWord] = useState('');
  const [fade, setFade] = useState(0);
  const [displayedLetters, setDisplayedLetters] = useState("");
  const [gameStatus, setGameStatus] = useState(null);
  const [character, setCharacter] = useState(null); 

  
  const videoRef = useRef(null);

  useEffect(() => {
    const wordsList = ['sol', 'amor', 'luna'];
    const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    setWord(randomWord);
    setFade(1);
  }, []);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws/video");

    ws.onmessage = (event) => {
        const message = JSON.parse(event.data); // Parsear el JSON recibido
        const frameBase64 = message.frame;
        const a = message.a;
        
        // Actualiza el valor de a
        setCharacter(a);
        console.log ("mensaje:", character);
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

  const handleCountdownFinish = () => {
    if (character && displayedLetters.length < word.length) {
      const lowerCaseInput = character.toLowerCase();
      const currentWord = displayedLetters + lowerCaseInput;
      setDisplayedLetters(currentWord);

      if (currentWord === word) {
        setGameStatus('win');
        return;
      }

      if (currentWord.length > word.length || !word.startsWith(currentWord)) {
        setGameStatus('lose');
        return;
      }
    } else {
      setGameStatus('lose');
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
            {/* Aquí se muestra el stream de video desde el WebSocket */}
            <img ref={videoRef} alt="Video Stream" style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
          </Box>
        </Grid>

        <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
              {character || ''}
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
          <CancelIcon sx={{ color: 'red', fontSize: '8rem', marginTop: "-95px", }} />
        ) : null}
      </Box>

      <Box sx={{ position: 'fixed', left: 0, top: '40%' }}>
        <CountdownButton onCountdownFinish={handleCountdownFinish} />
      </Box>

      <Page5button />
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

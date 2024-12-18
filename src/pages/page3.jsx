import { Container, Box, Typography, Fade, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../../src/assets/Letra.png';

export default function Page3() {
    const [showElements, setShowElements] = useState(false);
    const navigate = useNavigate();
    const [isHoveredStep, setIsHoveredStep] = useState(0); // Controla el paso de cada animación


    useEffect(() => {
        const timer = setTimeout(() => setShowElements(true), 800);

        // Activar cada etapa de `isHoveredStep` secuencialmente
        const hoverSequence = [1, 2, 3, 4]; // Define los pasos de animación
        hoverSequence.forEach((step, index) => {
            setTimeout(() => setIsHoveredStep(step), 2000 + index * 500); // 500ms entre cada animación
        });

        return () => {
            clearTimeout(timer);
            hoverSequence.forEach((_, index) => clearTimeout(index));
        };
    }, []);

    const handlePlayClick = () => {
        navigate("/page2");
    };

    return (
        <Container sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', px: 0 }}>
            {/* Título de la página */}
            <Fade in={showElements}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography
                        sx={{
                            fontFamily: 'Bebas Neue Cyrillic',
                            fontSize: '5rem',
                            color: 'white',
                            mb:"-20px",
                            textAlign: 'center',
                            transition: 'font-size 0.3s ease, color 0.3s ease',
                            '&:hover': { color: '#ffcc00' }
                        }}
                    >
                        Haz una seña y deja que el
                    </Typography>
                    
                    <Typography
                        sx={{
                            fontFamily: 'Bebas Neue Cyrillic',
                            fontSize: '5rem',
                            color: 'white',
                            textAlign: 'justify',
                            width: '80%',
                            transition: 'font-size 0.3s ease, color 0.3s ease',
                            '&:hover': { color: '#ffcc00' }
                        }}
                    >
                        juego escriba por ti
                    </Typography>
                </Box>
            </Fade>

            {/* Contenedor para las imágenes */}
            <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', maxWidth: '1200px', mt: 4 }}>
                {/* Contenedor del círculo con imagen */}
                <Fade in={showElements}>
                    <Box
                        sx={{
                            width: '300px',
                            height: '300px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            boxShadow: 3,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: "white",
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            transform: isHoveredStep === 1 ? 'scale(1.05)' : 'scale(1)',
                            '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }
                        }}
                    >
                        <Box
                            component="img"
                            src={image1}
                            alt="Descripción de la imagen 1"
                            sx={{
                                width: '65%',
                                height: 'auto',
                                transform: isHoveredStep === 1 ? 'scale(1.1)' : 'scale(1)',
                                transition: 'transform 0.3s ease',
                                '&:hover': { transform: 'scale(1.1)' }
                            }}
                        />
                    </Box>
                </Fade>

                {/* Contenedor del círculo para el texto */}
                <Fade in={showElements}>
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
                            transform: isHoveredStep === 2 ? 'scale(1.05)' : 'scale(1)',
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
                </Fade>
            </Box>

            {/* Botón debajo de las imágenes, centrado en la pantalla */}
            <Fade in={showElements}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: 6 }}>
                    <Button 
                        onClick={handlePlayClick}
                        sx={{
                            fontFamily: 'Bebas Neue Cyrillic',
                            fontSize: '3rem',
                            color: '#0075f2',
                            border: '2px solid white',
                            borderRadius: '50px',
                            padding: '10px 40px',
                            backgroundColor: '#FFFFFF',
                            textTransform: 'none',
                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                            '&:hover': { backgroundColor: '#0075f2', color: 'white', transform: 'scale(1.05)' }
                        }}
                    >
                        Jugar!
                    </Button>
                </Box>
            </Fade>
        </Container>
    );
}

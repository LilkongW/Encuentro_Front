import { Container, Typography, Box, Grow, Button } from '@mui/material';
import MadeWith from '../components/MadeWith';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Page1({ setAnimateMascot }) {
    const [checked, setChecked] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(false);
    const [hideElements, setHideElements] = useState(false); // Nuevo estado para ocultar elementos
    const navigate = useNavigate();

    useEffect(() => {
        setChecked(true); // Activa la animación de las letras
        const timer = setTimeout(() => setButtonVisible(true), 2000); // Retrasa la animación del botón
        return () => clearTimeout(timer); // Limpia el temporizador al desmontar
    }, []);

    const handleStartClick = () => {
        setHideElements(true); // Oculta las letras y el botón de inmediato
        setAnimateMascot(true); // Activa la animación de la mascota
        // Inicia la navegación después de un breve retraso para que se vea la ocultación
        setTimeout(() => {
            navigate("/page2");
            setAnimateMascot(false); // Resetea la animación después de navegar
        }, 100); // Retraso corto para visualizar la ocultación
    };

    return (
        <Container sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            {/* Contenedor para el título y subtítulo centrados */}
            <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    mt: 30,
                    ml: 60 
                }}
            >
                {/* Título y subtítulo con animación de crecimiento */}
                <Grow in={checked && !hideElements} timeout={3000}>
                    <Typography 
                        sx={{ 
                            fontFamily: 'Bebas Neue Cyrillic', 
                            fontSize: '14rem', 
                            color: "white",
                            textAlign: 'center',
                            lineHeight: 1 
                        }}
                    >
                        LinguaSign
                        <Box component="span" sx={{ fontSize: '4rem', display: 'block' }}>
                            Haciendo la comunicación accesible
                        </Box>
                    </Typography>
                </Grow>

                {/* Botón Start con animación de aparición retrasada */}
                <Grow in={buttonVisible && !hideElements} timeout={2000}>
                    <Button 
                        onClick={handleStartClick}
                        sx={{ 
                            mt: 4,
                            fontFamily: 'Bebas Neue Cyrillic', 
                            fontSize: '3rem', 
                            color: '#0075f2', 
                            border: '2px solid white', 
                            borderRadius: '50px', 
                            padding: '10px 40px', 
                            backgroundColor: '#FFFFFF', 
                            textTransform: 'none',
                            transition: 'background-color 0.3s ease, transform 0.3s ease', // Agrega la transición
                            '&:hover': {
                                backgroundColor: '#0075f2', // Cambia el color de fondo al pasar el ratón
                                color: 'white', // Cambia el color del texto al pasar el ratón
                                transform: 'scale(1.05)', // Aumenta el tamaño del botón al pasar el ratón
                            },
                        }}
                    >
                        Start
                    </Button>
                </Grow>
            </Box>

            {/* Footer centrado con fondo sutil */}
            <Box 
                component="footer" 
                sx={{ 
                    position: 'fixed', 
                    bottom: 0, 
                    left: 0, 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    padding: 2,
                    backgroundColor: 'rgba(0, 0, 0, 0.1)', 
                    backdropFilter: 'blur(2px)', 
                }}
            >
                <MadeWith />
            </Box>
        </Container>
    );
}

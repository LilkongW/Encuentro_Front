import { Container, Typography, Box, Grow, Button } from '@mui/material';
import MadeWith from '../components/MadeWith';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Page1({ setAnimateMascot }) {
    const [checked, setChecked] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(false);
    const [hideElements, setHideElements] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setChecked(true);
        const timer = setTimeout(() => setButtonVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleStartClick = () => {
        setHideElements(true);
        setAnimateMascot(true);
        setTimeout(() => {
            navigate("/page2");
            setAnimateMascot(false);
        }, 100);
    };

    return (
        <Container sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            {/* Contenedor para el título y subtítulo centrados */}
            <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    mt: 35,
                    ml: 60 
                }}
            >
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
                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#0075f2',
                                color: 'white',
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        Start
                    </Button>
                </Grow>
            </Box>

            {/* Contenedor para la lista en la parte superior izquierda */}
            <Box 
                sx={{ 
                    position: 'absolute', 
                    top: 16, 
                    right: 0,
                    color: 'white', 
                    textAlign: 'left', // Cambiado a 'left' para alinear a la izquierda
                    lineHeight: 1.5, // Espaciado entre líneas
                }}
            >
                <Typography 
                    variant="body1" 
                    sx={{ fontFamily: 'Bebas Neue Cyrillic', fontWeight: 'bold', mb: 0.5 , fontSize:"2rem"}} // Negrita y margen abajo
                >
                    Expositores:
                </Typography>
                <Box sx={{ ml: 2 }}> {/* Agregar un margen a la izquierda para los nombres */}
                    <Typography variant="body1" sx={{ fontFamily: 'Bebas Neue Cyrillic', fontSize:"1.2rem" }}>
                        - Josuep Turmero
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: 'Bebas Neue Cyrillic',fontSize:"1.2rem" }}>
                        - Roygel Rosales
                    </Typography>
                </Box>

                <Typography 
                    variant="body1" 
                    sx={{ fontFamily: 'Bebas Neue Cyrillic', fontWeight: 'bold', mb: 0.5, fontSize:"2rem" }} // Negrita y margen abajo
                >
                    Profesores: 
                </Typography>
                <Box sx={{ ml: 2 }}> {/* Agregar un margen a la izquierda para los nombres */}
                    <Typography variant="body1" sx={{ fontFamily: 'Bebas Neue Cyrillic' , fontSize:"1.2rem"}}>
                        - Juan Carlos Villegas
                    </Typography>
                    <Typography variant="body1" sx={{ fontFamily: 'Bebas Neue Cyrillic', fontSize:"1.2rem" }}>
                        - Stephanie Carrillo
                    </Typography>
                </Box>
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

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
        const buttonTimer = setTimeout(() => setButtonVisible(true), 2000);

        const refreshTimer = setInterval(() => {
            navigate(0); // Esto hace que navegues a la ruta actual
        }, 12000);

        return () => {
            clearTimeout(buttonTimer);
            clearInterval(refreshTimer);
        };
    }, []);

    const handleStartClick = () => {
        setHideElements(true);
        setAnimateMascot(true);
        setTimeout(() => {
            navigate("/page2");
            setAnimateMascot(false);
        }, 100);
    };

    const handleInfoClick = () => {
        navigate("/pagetrans"); // Navega a la página /pagetrans
    };

    return (
        <Container sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
            <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    mt: 28,
                    ml: 75
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
                <Box
                    sx={{
                        display:"flex",
                        gap:"30px",
                    }}
                >
                    <Grow in={buttonVisible && !hideElements} timeout={2000}>
                        <Button 
                            onClick={handleInfoClick} // Llama a handleInfoClick para navegar a /pagetrans
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
                            INFO
                        </Button>
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
                
            </Box>

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
                    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
                    backdropFilter: 'blur(2px)', 
                }}
            >
                <MadeWith />
            </Box>
        </Container>
    );
}

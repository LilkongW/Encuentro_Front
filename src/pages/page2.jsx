import { Container, Typography, Box, Grow } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Page2() {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Temporizador para mostrar el texto después de 2 segundos
        const textTimer = setTimeout(() => {
            setChecked(true); // Activa la animación después de 2 segundos
        }, 2000); // Cambia este valor para ajustar el retraso

        // Temporizador para navegar a Page3 después de 5 segundos
        const navigateTimer = setTimeout(() => {
            navigate("/page3"); // Cambia a Page3
        }, 5000); // 5000 ms = 5 segundos

        return () => {
            clearTimeout(textTimer); // Limpia el temporizador para el texto
            clearTimeout(navigateTimer); // Limpia el temporizador de navegación
        };
    }, [navigate]);

    return (
        <Container sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', px: 0 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    ml: -25,
                }}
            >
                <Grow in={checked} timeout={2000}>
                    <Typography
                        sx={{
                            fontFamily: 'Bebas Neue Cyrillic',
                            fontSize: '14rem',
                            color: 'white',
                            lineHeight: 1,
                        }}
                    >
                        ¿Cómo jugar LinguaSign?
                    </Typography>
                </Grow>
            </Box>
        </Container>
    );
}

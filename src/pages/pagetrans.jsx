import { Container, Typography, Box, Grow } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FooterAuthor from '../components/FooterAuthor';

export default function PageTrans() {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Temporizador para mostrar el texto después de 2 segundos
        const textTimer = setTimeout(() => {
            setChecked(true); // Activa la animación después de 2 segundos
        }, 1500);

        // Temporizador para navegar a Page3 después de 5 segundos
        const navigateTimer = setTimeout(() => {
            navigate("/page3"); // Cambia a Page3
        }, 4000); // 5000 ms = 5 segundos

    

        return () => {
            clearTimeout(textTimer); // Limpia el temporizador para el texto
            clearTimeout(navigateTimer); // Limpia el temporizador de navegación
        };
    }, [navigate]);

    return (
        <Container sx={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', // Centra horizontalmente
            px: 0 
        }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column', // Asegura que los elementos se apilen
                    alignItems: 'center', // Centra los elementos en el eje horizontal
                    justifyContent: 'center', // Centra los elementos en el eje vertical
                }}
            >
                <Grow in={checked} timeout={2000}>
                    <Typography
                        sx={{
                            fontFamily: 'Bebas Neue Cyrillic',
                            fontSize: '14rem',
                            color: 'white',
                            lineHeight: 1,
                            textAlign: 'center', // Centra el texto horizontalmente
                        }}
                    >
                        ¿Cómo jugar LinguaSign?
                    </Typography>
                </Grow>
            </Box>
                <FooterAuthor/>
        </Container>
    );
}

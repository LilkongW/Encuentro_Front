import { Container, Box, Grow, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

export default function Page2() {
    const navigate = useNavigate(); // Inicializa el hook useNavigate

    // Función para manejar el clic en los botones
    const handleButtonClick = (page) => {
        navigate(page); // Navega a la página indicada (page4 o page5)
    };

    return (
        <Container sx={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start', // Alinea el contenido hacia la izquierda
            px: 0, 
        }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column', // Cambiado a 'column' para apilar los botones
                    gap: '40px', // Aumentado el espacio entre los botones
                    justifyContent: 'flex-start', // Alinea los botones al inicio
                    alignItems: 'flex-start', // Alinea los botones hacia la izquierda
                    paddingLeft: '20px', // Da un poco de espacio desde el borde izquierdo
                }}
            >
                <Grow in={true} timeout={3000}>
                    <Button
                        onClick={() => handleButtonClick('/page4')} // Navega a page4 cuando se hace clic
                        sx={{
                            fontFamily: 'Bebas Neue Cyrillic',
                            fontSize: '4rem', // Aumentado el tamaño de la fuente
                            color: '#0075f2',
                            border: '3px solid white', // Borde más grueso
                            borderRadius: '50px',
                            padding: '25px 60px', // Aumentado el padding
                            width: '450px', // Ancho fijo de los botones
                            backgroundColor: '#FFFFFF',
                            textTransform: 'none',
                            lineHeight: 1.5, // Ajustar el alto de la línea
                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#0075f2',
                                color: 'white',
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        ESTATICO
                    </Button>
                </Grow>

                <Grow in={true} timeout={3000}>
                    <Button
                        onClick={() => handleButtonClick('/page5')} // Navega a page5 cuando se hace clic
                        sx={{
                            fontFamily: 'Bebas Neue Cyrillic',
                            fontSize: '4rem', // Aumentado el tamaño de la fuente
                            color: '#0075f2',
                            border: '3px solid white', // Borde más grueso
                            borderRadius: '50px',
                            padding: '25px 60px', // Aumentado el padding
                            width: '450px', // Ancho fijo de los botones
                            backgroundColor: '#FFFFFF',
                            textTransform: 'none',
                            lineHeight: 1.5, // Ajustar el alto de la línea
                            transition: 'background-color 0.3s ease, transform 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#0075f2',
                                color: 'white',
                                transform: 'scale(1.05)',
                            },
                        }}
                    >
                        DINAMICO
                    </Button>
                </Grow>
            </Box>
        </Container>
    );
}

import { Typography, Box, Container } from "@mui/material";

export default function FooterAuthor({ Right }) {
  return (
    <Container>
      <Box
        component="footer"
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          height: "30px",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          backdropFilter: 'blur(2px)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: 6,
            // Condicional para determinar la posición
            left: Right ? 'auto' : 56, // Si Right es true, no hay desplazamiento a la izquierda
            right: Right ? 56 : 'auto', // Si Right es true, alinea a la derecha
            color: '#082da6',
            textAlign: Right ? 'right' : 'left', // Alineación del texto según Right
            lineHeight: 1.5,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Bebas Neue Cyrillic',
              fontWeight: 'bold',
              fontSize: '1.6rem',
              mb: 1,
            }}
          >
            Hecho por - Victor Toro
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // Define tus colores personalizados
    primary: {
      main: '#1976d2', // Color azul (puedes ajustarlo según tu preferencia)
    },
    text: {
      primary: '#FFFFFF', // Color de texto principal (blanco)
      secondary: '#B0BEC5', // Color de texto secundario (puedes cambiarlo según lo que necesites)
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif', // Fuente global predeterminada

    // Personaliza las variantes para usar Bebas Neue en los títulos
    h1: { fontFamily: 'Bebas Neue Cyrillic, sans-serif' },
    h2: { fontFamily: 'Bebas Neue Cyrillic, sans-serif' },
    h3: { fontFamily: 'Bebas Neue Cyrillic, sans-serif' },
    h4: { fontFamily: 'Bebas Neue Cyrillic, sans-serif' },
    h5: { fontFamily: 'Bebas Neue Cyrillic, sans-serif' },
    h6: { fontFamily: 'Bebas Neue Cyrillic, sans-serif' },

    // Personaliza los botones
    button: { fontFamily: 'Poppins, sans-serif' }
  },
});

export default theme;

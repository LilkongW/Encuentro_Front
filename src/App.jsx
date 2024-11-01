import './App.css';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Background from "./assets/background.jpg";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { Box } from "@mui/material";
import Mascota from "./assets/mascota.jpg";
import { useState } from 'react';
import {Typography} from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const [animateMascot, setAnimateMascot] = useState(false);
  const [showPage2, setShowPage2] = useState(false);

  const handleAnimationEnd = () => {
    setShowPage2(true);
    setAnimateMascot(false);
  };

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      
      {/* Fondo con brillo reducido */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.65)',
          zIndex: -2,
        }}
      />

      {/* Mascota y semicírculo solo en Page1 y Page2 */}
      {(location.pathname === '/' || location.pathname === '/page2') && (
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: animateMascot || showPage2 ? '65%' : '0%',
            transform: 'translateY(-50%)',
            width: '35%',
            height: '100%',
            borderRadius: animateMascot ? '50%' : (showPage2 ? '100% 0 0 100%' : '0 100% 100% 0'),
            backgroundColor: 'white',
            zIndex: -1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 1.5s ease',
          }}
          onTransitionEnd={handleAnimationEnd}
        >
          <Box
            component="img"
            src={Mascota}
            alt="Mascota"
            sx={{
              objectFit: 'contain',
              transform: showPage2 ? 'scaleX(-1)' : 'none',
            }}
          />
        </Box>
      )}

      {/* Rutas de la aplicación */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Routes>
          <Route path="/" element={<Page1 setAnimateMascot={setAnimateMascot} />} />
          <Route path="/page2" element={showPage2 ? <Page2 /> : null} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
        </Routes>
      </Box>
                  {/* Contenedor para la lista en la parte superior izquierda */}
                <Box 
                sx={{ 
                    position: 'absolute', 
                    top: 25, 
                    right: 20,
                    color: 'white', 
                    textAlign: 'left', // Cambiado a 'left' para alinear a la izquierda
                    lineHeight: 1.5, // Espaciado entre líneas
                }}
            >
                <Typography 
                    variant="body1" 
                    sx={{ fontFamily: 'Bebas Neue Cyrillic', fontWeight: 'bold', mb: 1, fontSize:"1.2rem" }} // Negrita y margen abajo
                >
                    Hecho por - Victor Toro
                </Typography>
      </Box>          
    </Box>
  );
}

export default App;

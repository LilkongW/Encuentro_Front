import { Typography, Box } from "@mui/material";
import ReactIcon from "../assets/react.svg";  // Asegúrate de que la ruta sea correcta
import TensorflowIcon from "../assets/Tensorflow_logo.svg";
import MediaPipeIcon from "../assets/mediapipe.svg";

export default function MadeWith() {
  return (
    <Box display="flex" alignItems="center">
      {/* Texto */}
      <Typography variant="h6" sx={{ marginRight: 2, color: 'white' }}>
        Hecho con React, TensorFlow y MediaPipe!
      </Typography>
      
      {/* Imagen de React */}
      <Box 
        component="img" 
        src={ReactIcon} 
        alt="React Logo" 
        sx={{ width: 40, height: 40, marginRight: 1 }} 
      />
      <Box 
        component="img" 
        src={TensorflowIcon} 
        alt="TensorFlow Logo" 
        sx={{ width: 40, height: 40, marginRight: 1 }} 
      />
      <Box 
        component="img" 
        src={MediaPipeIcon} 
        alt="MediaPipe Logo" 
        sx={{ width: 40, height: 40, marginRight: 1 }} 
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: 8,
          right: 56,
          color: '#082da6',
          textAlign: 'right',
          lineHeight: 1.5,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Bebas Neue Cyrillic',
            fontWeight: 'bold',
            mb: 1,
            fontSize: '1.6rem',
          }}
        >
          Hecho por - Victor Toro
        </Typography>
      </Box>
    </Box>
  );
}
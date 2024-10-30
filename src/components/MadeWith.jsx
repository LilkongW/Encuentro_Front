import { Typography, Box } from "@mui/material";
import ReactIco from "../assets/react.svg";  // Asegúrate de que la ruta sea correcta
import TensorflowICO from "../assets/Tensorflow_logo.svg";
import MediaPipeICO from "../assets/mediapipe.svg";

export default function MadeWith() {
  return (
    <Box display="flex" alignItems="center">
      {/* Texto */}
      <Typography variant="h6" sx={{ marginRight: 2, color: 'white' }}>
        Hecho con React, Tensorflow y MediaPipe!
      </Typography>
      
      {/* Imagen de React */}
      <Box 
        component="img" 
        src={ReactIco} 
        alt="React Logo" 
        sx={{ width: 40, height: 40, marginRight: 1 }} 
      />
      <Box 
        component="img" 
        src={TensorflowICO} 
        alt="TensorFlow Logo" 
        sx={{ width: 40, height: 40, marginRight: 1 }} 
      />
      <Box 
        component="img" 
        src={MediaPipeICO} 
        alt="MediaPipe Logo" 
        sx={{ width: 40, height: 40, marginRight: 1 }} 
      />
    </Box>
  );
}

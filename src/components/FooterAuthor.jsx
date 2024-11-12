import { Typography, Box } from "@mui/material";

export default function FooterAuthor() {
  return (
    <Box 
        component="footer" 
        sx={{ 
            position: 'fixed', 
            bottom: 0, 
            left: 0, 
            width: '100%', 
            height:"30px",
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            padding: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.5)', 
            backdropFilter: 'blur(2px)', 
        }}
    display="flex" alignItems="center">

      <Box
        sx={{
          position: 'absolute',
          bottom: 6,
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
            fontSize: '1.6rem',
            mb:1,
          }}
        >
          Hecho por - Victor Toro
        </Typography>
      </Box>
    </Box>
  );
}
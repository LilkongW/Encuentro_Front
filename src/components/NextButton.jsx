import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NextButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/page2');  // Redirige a la página 2
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Siguiente!
    </Button>
  );
}

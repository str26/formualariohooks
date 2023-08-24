import FormSignUp from './components/ClassComponentes.jxs/FormSignUp';
import Container from "@mui/material/Container"
import Typography from '@mui/material/Typography';

import './App.css';
 
function App() {
  return (
    <Container component="section" maxWidth="sm">
    <Typography variant="h3" align='center'>Formulario Registro</Typography>
      <FormSignUp />
      </Container>
    );
}

export default App;

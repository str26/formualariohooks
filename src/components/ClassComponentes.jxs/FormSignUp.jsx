import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Container from "@mui/material/Container"
import Switch  from "@mui/material/Switch"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Typography from "@mui/material/Typography"


function FormSignUp () {
    return <form>
                <TextField 
                    id="name" 
                    label="Nombre" 
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    />
                <TextField 
                    id="lasname" 
                    label="Apellidos" 
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    />
                
                <TextField 
                    id="email" 
                    label="Correo Electronico" 
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    />
        
            <FormGroup>
                <FormControlLabel 
                     control = {<Switch defaultChecked />} 
                     label = "Promociones"/>
                
                
                <FormControlLabel 
                    control =  {<Switch defaultChecked />} 
                    label = "Novedades" />
            </FormGroup>

        <Button variant="contained" >Registrarse</Button>
        

    </form>
}

export default FormSignUp
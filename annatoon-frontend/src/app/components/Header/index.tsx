import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import "@fontsource/comfortaa"; // Defaults to weight 400
import "@fontsource/comfortaa/400.css"; // Specify weight


function Header() {


    return (
        
        <AppBar
        sx={{
            backgroundColor: 'pink',
        }}> 

            <Container
            sx={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
             }}>

                <Toolbar>

                    <Typography 
                    variant ="h6"
                    sx={{
                        fontFamily: 'Grandstander Variable',
                        fontWeight: '700',
                    }}
                    >
                        annatoon

                    </Typography>
                    <Box>
                        
                        
                        
                        

                    
                    </Box>   

                </Toolbar>
            </Container>
        </AppBar>
        
    )
}

export default Header
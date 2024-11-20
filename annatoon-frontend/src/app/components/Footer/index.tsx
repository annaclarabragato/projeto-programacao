import { Container, Stack, Typography} from '@mui/material'
import { IconButton } from '@mui/material'
import { Person, Search} from '@mui/icons-material'

function  Footer() {
    
    return (
        
            <Container
                sx={{
                    Padding: '3rem',
                    backgroundColor: 'pink',
                }}
            > 
                            
                 <Stack
                    direction="row"
                    justifyContent="center"
                    
                 >

                    <IconButton>
                        <Person />
                    </IconButton>               

                    <IconButton>            
                        <Search />
                    </IconButton>


                 </Stack>

            </Container>
    )   
}
export default Footer
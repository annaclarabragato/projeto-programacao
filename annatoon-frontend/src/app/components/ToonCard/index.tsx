import { Paper } from '@mui/material'
import { IWebtoon } from '../../@libs/types';

type ToonCardProps = {
    webtoon: IWebtoon;
 }
 
 function ToonCard({
    webtoon
 }: ToonCardProps) {

    return (
        <Paper
         component="a"
         elevation={0}
         href={webtoon.id}
         sx={{
 
             minWidth:'10rem'
         }}
        > 
         <img src={ `assets/${webtoon.poster}` }
              style={{
                 width:'100%'
              }}
         >
         
         
         
         </img>
        </Paper>
     )   
 }
export default ToonCard
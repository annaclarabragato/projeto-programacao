import { Box, Container, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { ICategory, IWebtoon } from '../../@libs/types';
import { WebtoonsService } from '../../services/webtoon-service';
import ToonCard from '../ToonCard';

type SectionProps = {
    category: ICategory;
}

function Section({
    category
}: SectionProps) {

    const[webtoon, setWebtoon] = useState<IWebtoon[]>([]);

    useEffect(() =>{

        if (category.id){
        WebtoonsService.getByCategoryId(category.id)
        .then(result => {
            setWebtoon(result)
        });
    }
//executa o que está aqui dentro quando carrega o componente.
    }, []);
    

    return (
        <Box>
            <Container>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        paddingTop: '2rem',
                        color: 'pink',
                        fontFamily: 'Grandstander Variable',
                    }}>
                     { category.name }
                </Typography>
                <Stack
                direction="row"
                gap={0.5}
                sx={{
                    overflowY: 'hidden',
                    whiteSpace: 'nowrap',
                    paddingY: '1rem',
                    display: 'flex',
                    }}
                >
                    {webtoon.map(item => (
                        <ToonCard key={item.id} webtoon={item}/>
                    ))}
                </Stack>
            </Container>
        </Box>
    )
}

export default Section;
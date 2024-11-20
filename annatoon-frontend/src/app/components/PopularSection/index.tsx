import { Box, Container, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { IWebtoon } from '../../@libs/types';
import { WebtoonsService } from '../../services/webtoon-service';
import { useParams } from 'react-router-dom';

function PopularSection() {

    const params = useParams();

    const [webtoon, setWebtoon] = useState<IWebtoon>({} as IWebtoon);

    useEffect(() => {

        const webtoonId = (params.id) ? params.id : "f17f671b-8c42-4483-9bbb-de5308866ef2"


        WebtoonsService.getWebtoonsById(webtoonId)
            .then(result => {
                console.log('AQUI: ', result)
                if (result) setWebtoon(result);
            })
            .catch(error => {
                console.log('PAU:', error)
            })
    }, [params]);


    return (
        <Box
        sx={{
            paddingLeft: '10rem'
        }}>
            <Container>
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: 'Grandstander Variable',
                        fontWeight: '700',
                        color: 'pink',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                > Popular do dia!
                </Typography>

                <Stack
                    direction="row"
                    gap={0.5}
                    sx={{
                        overflowY: 'hidden',
                        whiteSpace: 'nowrap',
                        paddingLeft: '1rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img src={`assets/${webtoon.poster}`} />
                </Stack>

                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: 'Grandstander Variable',
                        fontWeight: '700',
                        color: 'pink',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                > {webtoon.title}
                </Typography>

                <Typography
                            variant="body2"
                            sx={{color: 'pink',
                                fontFamily: 'Grandstander Variable',
                            }}
                        >
                            {webtoon.description}
                        </Typography>

            </Container>
        </Box >
    )
}

export default PopularSection;
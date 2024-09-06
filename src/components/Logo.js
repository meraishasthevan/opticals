import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import Cardsection from './Cardsection';
import { useNavigate } from 'react-router-dom';

export default function Logo() {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/detailpage');
    };

    return (
        <div style={{ marginTop: '50px' }} className='container'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card onClick={handleClick} sx={{ height: '100%' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.specsmakers.in/cdn/shop/files/computer_glass_3.webp?v=1722835067&width=480"
                                alt="GLASS"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    GLASS
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    SUN GLASSES
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card onClick={handleClick} sx={{ height: '100%' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.specsmakers.in/cdn/shop/files/Computer_glass_1_4fd12353-8981-4e96-ab06-bc8c520a6c84.webp?v=1722835066&width=480"
                                alt="GLASS"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    GLASS
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    COMPUTER GLASSES
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card onClick={handleClick} sx={{ height: '100%' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://www.specsmakers.in/cdn/shop/files/reading_glass.webp?v=1722835066&width=480"
                                alt="GLASS"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    GLASS
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    READING GLASSES
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <Cardsection />
        </div>
    );
}

import React from 'react'
import Box from '@mui/material/Box';
import { Card, Grid, CardMedia, CardContent, Button, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
const RecipeCard = () => {
    return (
        <Card>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image="/static/images/cards/live-from-space.jpg"
                        alt="Live from space album cover"
                    />
                </Grid>
                <Grid item xs={6}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" endIcon={<CurrencyExchangeIcon />} fullWidth>
                        Send
                    </Button>
                </Grid>
            </Grid>

        </Card>
    )
}

export default RecipeCard
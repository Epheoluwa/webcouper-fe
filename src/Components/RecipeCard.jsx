import React, { useState } from 'react'
import { Card, Grid, CardMedia, CardContent, Button, Typography, Backdrop, Box, Modal, Fade } from '@mui/material';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import axios from 'axios';
import Coins from './Coins';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #51087E',
    borderRadius: '15px',
    boxShadow: 24,
    p: 4,
};

const RecipeCard = ({ data }) => {
    const [open, setOpen] = useState(false);
    const [currencyUpdate, setCurrencyUpdate] = useState({
        usdprice: '',
        rate: ''
    });

    const handleClose = () => setOpen(false);
    const price = Math.floor(Math.random() * 10000) + 1;

    const handleOpen = async () => {
        setOpen(true);
        await axios.get('https://api.fastforex.io/convert?api_key=' + process.env.REACT_APP_FASTFOREX_API_KEY + '&from=NGN&to=USD&amount=' + price)
            .then(res => {
                setCurrencyUpdate({
                    usdprice: res.data.result.USD,
                    rate: res.data.result.rate
                })
            })
            .catch(err => {
                console.log(err);
            })
    };


    let priceFormat = (price) => {
        return new Intl.NumberFormat("en-US").format(price);
    };

    return (
        <>
            <Card
                sx={{
                    width: {
                        xs: '100%',
                        sm: '100%',
                        md: '100%',
                        lg: '100%',
                    },
                    height: '100%',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="div" align='center'>
                            {/* {data.name} */}
                            {data.knownAs}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={data.image}
                            alt="recipe Image"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CardContent>

                            <Typography variant="body2" color="text.secondary">
                                {/* {data.desc} */}
                               Category: {data.category}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {/* {data.desc} */}
                               Calories: {data.nutrients?.ENERC_KCAL}
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                                &#8358;{" "}
                                {priceFormat(price)}
                            </Typography>
                        </CardContent>
                        <Button variant="contained" endIcon={<CurrencyExchangeIcon />} fullWidth onClick={handleOpen}>
                             SEE PRICE IN USD
                        </Button>
                    </Grid>

                </Grid>

            </Card>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Coins />
                        <Typography id="transition-modal-title" variant="h4" component="h2" align='center'>
                            &#36;{currencyUpdate.usdprice}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }} variant='body2' align='center'>
                           rate: {currencyUpdate.rate}
                        </Typography>



                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default RecipeCard
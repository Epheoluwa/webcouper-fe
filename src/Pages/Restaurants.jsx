import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navigation from '../Components/Navigation'
import { Typography, Card, Grid, CardContent, CardActionArea, Divider, Box, } from '@mui/material';
import RestLoading from '../Components/RestLoading';
const Restaurants = () => {
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const apiKey = process.env.REACT_APP_GEOAPIFY_API_KEY;
            const radius = 5000;
            const limit = 20;
            // const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=restaurant&key=${apiKey}`;
            const url = `https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=circle:${longitude},${latitude},${radius}&limit=${limit}&apiKey=${apiKey}`;



            const response = await axios.get(url);
            setRestaurants(response.data.features);
            setLoading(false)
            // console.log(response);
          } catch (error) {
            console.error(error);
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }

  }, []);
  return (
    <>

      <Typography variant='h4' align='center'>
        Restaurants Near Me
      </Typography>
      <Divider />
      {
        loading ?
          <RestLoading />
          :
          <Box mt={5} mb={8}>
            <Grid container spacing={4}>
              {restaurants?.map(
                (restaurant, index) => (
                  <Grid item xs={12} md={12} key={index}>
                    <Card
                      sx={{ maxWidth: 500, margin: 'auto' }}
                    >
                      <CardActionArea>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Name: {restaurant.properties.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Address: {restaurant.properties.address_line2}
                          </Typography>
                        </CardContent>
                      </CardActionArea>

                    </Card>
                  </Grid>
                )
              )}
            </Grid>
          </Box>  
      }

      <Navigation />
    </>
  )
}

export default Restaurants
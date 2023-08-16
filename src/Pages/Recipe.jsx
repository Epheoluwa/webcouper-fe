import React, { useEffect, useState } from 'react'
import {Grid, Box} from '@mui/material';
import axios from 'axios';
import RecipeCard from '../Components/RecipeCard'
import { SectionBody } from '../StyledComponent/GlobalStyles';
import Navigation from '../Components/Navigation';
import Eating from '../Components/Eating';

const Recipe = () => {
    const [Loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    
    const options = {
        method: 'GET',
        url: 'https://burgers-hub.p.rapidapi.com/burgers',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_KFC_API_KEY,
          'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
        }
      };

    const fetchrecipe = async () => {
        await axios.request(options)
            .then(res => {
                let recipe = res.data;
                if (recipe) {
                    setLoading(false);
                    setData(recipe);
                }
                console.log(recipe);
            })
            .catch(error => {
                console.log(error);
            })
    }


    useEffect(() => {
        fetchrecipe()
    }, [])
    return (
        <>
            <SectionBody>
                {
                    Loading ?
                        <Eating />
                        :
                        <>
                            <Box mt={5} mb={8}>
                                <Grid container spacing={4}>
                                    {data?.map(
                                        (item, index) => (
                                            <Grid item xs={4} md={4} key={index}>
                                                <RecipeCard data={item} />
                                            </Grid>
                                        )
                                    )}
                                </Grid>
                            </Box>

                            <Navigation />
                        </>
                }
            </SectionBody>

        </>

    )
}

export default Recipe
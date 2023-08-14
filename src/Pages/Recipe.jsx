import React from 'react'
import Grid from '@mui/material/Grid';
import RecipeCard from '../Components/RecipeCard'
import { SectionBody } from '../StyledComponent/GlobalStyles';
const Recipe = () => {
    return (
        <SectionBody>
            <Grid container spacing={4}>
                <Grid item xs={4} md={4}>
                    <RecipeCard />
                </Grid>
                <Grid item xs={4} md={4}>
                    <RecipeCard />
                </Grid>
                <Grid item xs={4} md={4}>
                    <RecipeCard />
                </Grid>
            </Grid>
        </SectionBody>
    )
}

export default Recipe
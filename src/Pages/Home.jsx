import React from 'react'
import Grid from '@mui/material/Grid';

import { LinkButton, SectionBody, TitleWord } from '../StyledComponent/GlobalStyles';
import Wave from '../Components/Wave';
import { Box } from '@mui/material';
import Woman from '../Components/Woman';
import Walking from '../Components/Walking';

const Home = () => {
    return (
        <SectionBody>

            <Box
                sx={{
                    marginTop: '140px'
                }}

            >
                <Grid container spacing={4}>
                    <Grid item xs={3} md={3} sx={{ margin: 'auto', paddingLeft: '180px !important' }}>
                        <LinkButton to='recipes'>
                            VISIT OUR RECIPES
                        </LinkButton>
                        <Woman />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Wave />
                    </Grid>
                    <Grid item xs={3} md={3} sx={{ margin: 'auto' }}>
                        <LinkButton to='restaurants'>
                            VIEW CLOSE BY RESTAURANTS
                        </LinkButton>
                        <Walking />
                    </Grid>
                </Grid>
            </Box>

                <TitleWord>
                    Miss Ore Portfolio
                </TitleWord>

        </SectionBody>
    )
}

export default Home
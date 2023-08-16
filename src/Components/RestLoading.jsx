import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../lotties/cycling.json';
import { Typography } from '@mui/material';

const RestLoading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={400}
                width={600}
            />
            <Typography variant='body1' align='center'>
                Loading.......
            </Typography>
        </div>
    )
}

export default RestLoading
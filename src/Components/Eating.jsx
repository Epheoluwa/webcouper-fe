import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../lotties/eating.json';
import { Typography } from '@mui/material';
const Eating = () => {
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
                width={400}
            />
            <Typography variant='body1' align='center'>
                Loading.......
            </Typography>
        </div>
    )
}

export default Eating
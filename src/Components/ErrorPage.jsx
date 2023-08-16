import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../lotties/sadface.json';
import { Typography } from '@mui/material';
import Navigation from './Navigation';
const ErrorPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};
return (
    <>
        <Lottie
            options={defaultOptions}
            height={400}
            width={400}
        />
        <Typography variant='h5' align='center' >
          You are in a wrong page, use the navigation below to find your way around.
        </Typography>
        <Navigation />
    </>
)
}

export default ErrorPage
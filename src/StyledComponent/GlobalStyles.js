import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export const SectionBody = styled.section`
    padding: 0.5rem 2rem;
    
    @media screen and (max-width: 987px) {
        padding: 1rem 0.5rem;
    }
    @media screen and (max-width: 600px) {
        padding: 0.5rem 0.5rem;
    }
`;

export const LinkButton = styled(Link)`
    width: 50%;
    border: none;
    outline: none;
    padding: 1.3rem 2rem;
    background-color: #51087E;
    color: white;
    font-size: 0.9rem;
    font-weight: 800;
    font-family: monospace;
    margin: 1rem 0;
    cursor: pointer;
    text-align: center;
    margin: auto;
    text-decoration: none;
    &:hover {
        background-color: white;
        color: #51087E;
    }
`;

export const TitleWord = styled(Typography)`
    text-align: center;
    font-size: 3.5rem !important;
    font-weight: 900;
    font-family: monospace;
    margin-top: 50px !important;
`;
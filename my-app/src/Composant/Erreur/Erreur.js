import React from 'react'
import Error from '../../Photos/404.avif'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Espace = styled.p`
color: white;
`;

const BackLink = styled(Link)`
    color: black;
    text-decoration: underline;
    font-size: 18px;
    
    @media (max-width: 768px){
      font-size: 14px;
    }
`

const ImageError = styled.img`
margin-top : 100px;
margin-bottom :100px;

@media (max-width: 768px){
  height: 99px;
  width: 198px;
  margin-top : 50px;
  margin-bottom :50px;}
`;

const TexteError = styled.p`
color: #FF6060;
font-size: 36px;
margin-bottom :100px;

@media (max-width: 768px){
font-size: 18px;
margin-bottom :50px;}
`;

export default function Erreur() {
  return (
    <div>
        <ImageError src={Error} alt='Logo erreur'></ImageError>
        <TexteError> Oups! La page que vous demandez n'existe pas.</TexteError>
        <BackLink to="/">Retourner sur la page d'accueil</BackLink>
        <Espace>.</Espace>
    </div>
  )
}

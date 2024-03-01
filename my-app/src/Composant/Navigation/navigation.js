import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Photonav from '../../Photos/Photonav.avif'

const StyledNav = styled.nav`
margin-top: 50px;
`;

const StyledLink = styled(Link)`

    padding: 15px;
    color: black;
    text-decoration: underline;
    font-size: 24px;
    
`

export default function Navigation() {
  return (

        <StyledNav>
         <StyledLink to="/">Accueil</StyledLink>
         <StyledLink to="/A Propos">A Propos</StyledLink>   
        </StyledNav>

  )
}

import React from 'react'
import { Container,HomeImg } from './styles'
import HomeImage from '../../assets/Home_Img.svg'
import { CategoryCarousel,OffersCarousel }from '../../components'

export function Home() {
  return (
    <Container>
        <HomeImg src={HomeImage} alt="Home Image"/>
        <CategoryCarousel/>
        <OffersCarousel/>
    </Container>
  )
}


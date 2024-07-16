import React from 'react'
import { Container,HomeImg } from './styles'
import HomeImage from '../../assets/Home_Img.svg'
import { CategoryCarousel,OffersCarousel,Header }from '../../components'

export function Home() {
  return (
    <Container>
        <Header/>
        <HomeImg src={HomeImage} alt="Home Image"/>
        <CategoryCarousel/>
        <OffersCarousel/>
    </Container>
  )
}


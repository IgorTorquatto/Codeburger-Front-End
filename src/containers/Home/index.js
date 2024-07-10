import React from 'react'
import { Container,HomeImg } from './styles'
import HomeImage from '../../assets/Home_Img.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'

function index() {
  return (
    <Container>
        <HomeImg src={HomeImage} alt="Home Image"/>
        <CategoryCarousel/>
        <OffersCarousel/>
    </Container>
  )
}

export default index

import React, { useEffect,useState } from 'react'
import { Container,Title,ContainerItems,Image_Carousel,Button } from './styles'
import Title_Offers from '../../assets/OFERTAS.png'
import api from '../../services/api'
import Carousel from 'react-elastic-carousel'
import formatCurrency from '../../utils/formatCurrency'

export function OffersCarousel() {
  const [offers,setOffers] = useState([])

  useEffect(()=>{
    async function loadOffers(){
        const { data } = await api.get('products')

        //we must use the filter method
        //returns only products with the "offer" field as true
        const onlyOffers = data.filter(product => product.offer).map(product =>{
          return { ...product, formatedPrice: formatCurrency(product.price)}
        })

        setOffers(onlyOffers)
    }

    loadOffers()
  },[])

  //for responsiveness to work

  const breakPoints = [
    { width: 1 , itemsToShow: 1 },
    { width: 400 , itemsToShow: 2 },
    { width: 600 , itemsToShow: 3 },
    { width: 900 , itemsToShow: 4 },
    { width: 1300 , itemsToShow: 5 },
  ]

  return (
    <Container>
        <Title src={Title_Offers} alt="offers title" />

        <Carousel itemsToShow={3} style={{width: '90%'}} breakPoints={breakPoints}>
          {
            //only if categories exists will this method be executed
            offers && offers.map( product => (
              <ContainerItems key={product.id}>
                <Image_Carousel src={product.url} alt="product photo"/>
                <p>{product.name}</p>
                <p>{product.formatedPrice}</p>
                <Button>Peça agora</Button>
              </ContainerItems>
            ))
          }
        </Carousel>
    </Container>
  )
}

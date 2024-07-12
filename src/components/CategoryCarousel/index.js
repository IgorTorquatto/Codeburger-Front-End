import React, { useEffect,useState } from 'react'
import { Container,Title,ContainerItems,Image_Carousel,Button } from './styles'
import Title_Category from '../../assets/CATEGORIAS.png'
import api from '../../services/api'
import Carousel from 'react-elastic-carousel'

export function CategoryCarousel() {
  const [categories,setCategories] = useState([])

  useEffect(()=>{
    async function loadCategories(){
        const { data } = await api.get('categories')

        setCategories(data)
    }

    loadCategories()
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
        <Title src={Title_Category} alt="category title" />

        <Carousel itemsToShow={3} style={{width: '90%'}} breakPoints={breakPoints}>
          {
            //only if categories exists will this method be executed
            categories && categories.map( category => (
              <ContainerItems key={category.id}>
                <Image_Carousel src={category.url} alt="category photo"/>
                <Button>{category.name}</Button>
              </ContainerItems>
            ))
          }
        </Carousel>
    </Container>
  )
}

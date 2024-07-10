import React, {useEffect} from 'react'
import { Container,Title } from './styles'
import Title_Category from '../../assets/CATEGORIAS.png'
import api from '../../services/api'

function CategoryCarousel() {

  useEffect(()=>{
    async function loadCategories(){
        const response = await api.get('categories')

        console.log(response);
    }

    loadCategories()
  },[])

  return (
    <Container>
        <Title src={Title_Category} />
    </Container>
  )
}

export default CategoryCarousel

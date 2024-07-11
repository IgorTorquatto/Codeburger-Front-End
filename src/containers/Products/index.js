import React, { useState,useEffect }from 'react'
import { Container,ProductsImg,CategoryButton,CategoriesMenu} from './styles'
import ProductsImage from '../../assets/products-image.svg'
import api from '../../services/api'

function Products() {
  const [categories,setCategories] = useState([])
  const [activeCategory,setActiveCategory] = useState(0)

  useEffect(()=>{
    async function loadCategories(){
      const { data } = await api.get('categories')
      //use the spreadoperator to create a new category called "All" with id 0 and still have all categories
      const newCategories = [{id: 0, name: 'Todos'},...data]
      setCategories(newCategories)
    }
    loadCategories()
  })

  return (
    <Container>
        <ProductsImg src={ProductsImage} alt="Products Image"/>
        <CategoriesMenu>
          {categories && categories.map( category => (
            <CategoryButton 
              key={category.id} 
              onClick={()=>{setActiveCategory(category.id)}}
              isActiveCategory = {activeCategory === category.id}
            >
                {category.name}
            </CategoryButton>
          ))}
        </CategoriesMenu>
    </Container>
  )
}

export default Products

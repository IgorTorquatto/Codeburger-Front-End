import React, { useState,useEffect }from 'react'
import { Container,ProductsImg,CategoryButton,CategoriesMenu,ProductsContainer} from './styles'
import ProductsImage from '../../assets/products-image.svg'
import api from '../../services/api'
import CardProduct from '../../components/CardProduct'
import formatCurrency from '../../utils/formatCurrency'

function Products() {
  const [categories,setCategories] = useState([])
  const [products,setProducts] = useState([])
  const [activeCategory,setActiveCategory] = useState(0)

  useEffect(()=>{
    async function loadCategories(){
      const { data } = await api.get('categories')
      //use the spreadoperator to create a new category called "All" with id 0 and still have all categories
      const newCategories = [{id: 0, name: 'Todos'},...data]
      setCategories(newCategories)
    }

    async function loadProducts(){
      const { data } = await api.get('products')

      const newData = data.map(product=>{
        return { ...product, formatedPrice: formatCurrency(product.price)}
      })
      
      setProducts(newData)
    }

    loadProducts()
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
        <ProductsContainer>
              {products && products.map(product=>(
                 //sending product via props
                <CardProduct key={product.id} product={product}/>
              ))}
        </ProductsContainer>
    </Container>
  )
}

export default Products

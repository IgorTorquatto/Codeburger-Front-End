import React from 'react'
import Button from '../Button'
import { Container,Image,ProductName,ProductPrice } from './styles'
import PropTypes from 'prop-types'

function CardProduct({ product }) {
  return (
    <Container>
        <Image src={product.url} alt={product.name}/>
        <div>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.formatedPrice}</ProductPrice>
            <Button>Adicionar</Button>
        </div>
    </Container>
  )
}

export default CardProduct

CardProduct.propTypes = {
    product: PropTypes.object
}
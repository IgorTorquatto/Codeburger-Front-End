import React from 'react'
import CartLogo from '../../assets/Cart_image.svg'
import { Container, CartLog } from './styles'
import { CartItems } from '../../components/CartItems'

export function Cart() {
  return (
    <Container>
        <CartLog src = { CartLogo } alt= "Cart Logo"/>
        <CartItems/>
    </Container>
  )
}


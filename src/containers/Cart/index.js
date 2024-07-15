import React from 'react'
import CartLogo from '../../assets/Cart_image.svg'
import { Container, CartLog,Wrapper } from './styles'
import { CartItems,CartResume } from '../../components'


export function Cart() {
  return (
    <Container>
        <CartLog src = { CartLogo } alt= "Cart Logo"/>
        <Wrapper>
            <CartItems/>
            <CartResume/>
        </Wrapper>
    </Container>
  )
}


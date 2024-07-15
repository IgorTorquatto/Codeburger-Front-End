import React from 'react'
import { Container } from './styles'
import { Button } from '../Button'

export function CartResume() {
 
  return (
    <div>
    <Container>
       <div className='container-top'>
          <h2 className='title'>Resumo do Pedido</h2>
          <p className='items'>Itens</p>
          <p className='items-price'>Valor Itens</p>
          <p className='delivery-tax'>Taxa de Entrega</p>
          <p className='delivery-tax-price'>Valor taxa de entrega</p>
       </div>
       <div className='container-bottom'>
          <p>Total</p>
          <p>Valor Total</p>
       </div>
    </Container>
      <Button style={{width: '100%',marginTop: '30px' }}>Finalizar Pedido</Button>
    </div>
  )
}

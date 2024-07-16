import React from 'react'
import { Container,PageLink,ContainerUser,ContainerRight,ContainerLeft } from './styles'
import PersonIcon from '../../assets/person-icon.png'
import CartIcon from '../../assets/cart-icon.png'

export function Header() {
  return (
    <Container>
        <ContainerLeft>
            <PageLink>Home</PageLink>
            <PageLink>Ver Produtos</PageLink>
        </ContainerLeft>

        <ContainerRight>
            <PageLink>
                <img src={CartIcon} alt="Cart"/>
            </PageLink>
            <div className='line'></div>
            <PageLink>
                <img src={PersonIcon} alt="Logo-Pessoa"/>
            </PageLink>

            <ContainerUser>
                <p>Olá pessoa</p>
                <PageLink className='exit'>Sair</PageLink>
            </ContainerUser>
        </ContainerRight>

    </Container>
  )
}

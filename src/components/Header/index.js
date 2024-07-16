import React from 'react'
import { Container,PageLink,ContainerUser,ContainerRight,ContainerLeft } from './styles'
import PersonIcon from '../../assets/person-icon.png'
import CartIcon from '../../assets/cart-icon.png'
import { useNavigate,useLocation } from 'react-router-dom'

export function Header() {
    const navigate = useNavigate()
    const { pathname } = useLocation()

  return (
    <Container>
        <ContainerLeft>
            <PageLink onClick={()=> navigate('/')} isActive = {pathname === '/'}>Home</PageLink>
            <PageLink onClick={()=> navigate('/produtos')} isActive = {pathname === '/produtos'}>Ver Produtos</PageLink>
        </ContainerLeft>

        <ContainerRight>
            <PageLink>
                <img src={CartIcon} alt="Cart"  onClick={()=> navigate('/carrinho')}/>
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

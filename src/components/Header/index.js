import React from 'react'
import { Container,PageLink,ContainerUser,ContainerRight,ContainerLeft } from './styles'
import PersonIcon from '../../assets/person-icon.png'
import CartIcon from '../../assets/cart-icon.png'
import { useNavigate,useLocation } from 'react-router-dom'
import { useUser } from '../../hooks/UserContext'

export function Header() {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { logout } = useUser()

    const logoutUser = ()=>{
        logout()
        navigate('/login')
    }

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
                <PageLink className='exit' onClick={logoutUser}>Sair</PageLink>
            </ContainerUser>
        </ContainerRight>

    </Container>
  )
}

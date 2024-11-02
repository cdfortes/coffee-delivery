import { Link } from 'react-router-dom'


import {  Container, FooterWrapper } from './styles'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <FooterWrapper>
      <Container>

        <Link to="/">
          <img src="/logo-white.svg" alt="Coffee Delivery" />
        </Link>

        <p> {currentYear} - CoffeeDeliver. Todos os Direitos Reservados</p>


      </Container>
    </FooterWrapper>
  )
}

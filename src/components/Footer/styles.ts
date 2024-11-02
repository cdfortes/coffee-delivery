import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1160px;
  padding: 32px 20px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FooterWrapper = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-text']};
  margin-top: auto;
  margin-bottom: 0;

  p{
   color: ${({ theme }) => theme.colors.white};
   font-size: .8rem;
  }
`

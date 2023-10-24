import styled from 'styled-components'

import backgroundImg from '../../assets/images/background.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Content = styled.main`
  height: 100%;

  display: flex;
  align-items: stretch;

  & > section:first-child {
    padding-inline: min(9.5%, 136px);
  }

  & > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    h1 {
      font-size: ${({ theme }) => theme.FONT.SIZE['2XLG']};
      color: ${({ theme }) => theme.COLORS.PINK};
      font-weight: 700;
      line-height: 63px;
    }

    p {
      font-size: ${({ theme }) => theme.FONT.SIZE['SM']};
      color: ${({ theme }) => theme.COLORS.GRAY['LIGHT']};
      font-weight: 400;
      line-height: 18px;
    }
  }
`

export const MainContainer = styled.div`
  width: 100%;
  max-width: 360px;
`

export const Form = styled.form`
  margin-block: 48px;

  & > h2 {
    font-size: ${({ theme }) => theme.FONT.SIZE['LG']};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 500;
    line-height: 32px;
  }

  & > fieldset {
    margin-block: 48px 24px;
  }
`

export const Background = styled.div`
  width: 100%;
  height: 100%;

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`

export const Header = styled.header`
  width: 100%;
  height: 144px;
  padding-inline: 144px;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND['EXTRA_LIGHT']};
`

export const Form = styled.form`
  width: 100%;
  max-width: 360px;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Avatar = styled.div`
  width: 186px;
  height: 186px;
  margin: -98px auto 48px;

  position: relative;

  & > img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }

  & > label {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    border-radius: 50%;

    background-color: ${({ theme }) => theme.COLORS.PINK};

    cursor: pointer;

    svg {
      font-size: calc(${({ theme }) => theme.FONT.SIZE['LG']} - 4px);

      color: ${({ theme }) => theme.COLORS.BACKGROUND['REGULAR']};
    }
  }
`

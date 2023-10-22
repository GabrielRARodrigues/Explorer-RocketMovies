import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  padding: 24px 124px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND['DARK']};

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY['EXTRA_DARK']};

  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;

  & > a {
    h2 {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: ${({ theme }) => theme.FONT.SIZE['LG']};
      line-height: 32px;
    }
  }
`

export const Profile = styled.div`
  display: flex;
  text-align: center;
  gap: 8px;

  & > a {
    min-width: 64px;
    height: 64px;

    img {
      width: 100%;
      height: 100%;

      border: 1px solid ${({ theme }) => theme.COLORS.GRAY['EXTRA_DARK']};
      border-radius: 50%;
    }
  }

  & > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: end;

    strong {
      font-size: ${({ theme }) => theme.FONT.SIZE['SM']};
      line-height: 18px;
    }

    span {
      color: ${({ theme }) => theme.COLORS.GRAY['DARK']};
      font-size: ${({ theme }) => theme.FONT.SIZE['SM']};
      font-weight: 400;
      line-height: 18px;
    }
  }
`

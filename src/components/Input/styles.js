import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 630px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND['LIGHT']};

  display: flex;
  text-align: center;
  gap: 16px;

  padding-inline: 16px;
  margin-bottom: 8px;

  border-radius: 10px;

  font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
  color: ${({ theme }) => theme.COLORS.GRAY['DARK']};

  & > input {
    width: 100%;
    height: 56px;

    padding-block: 16px;

    font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
    color: ${({ theme }) => theme.COLORS.GRAY['DARK']};

    background: transparent;
    border: 0;

    font-weight: 400;

    &::placeholder {
      font-family: ${({ theme }) => theme.FONT.FAMILY['PRIMARY']};
      color: ${({ theme }) => theme.COLORS.GRAY['DARK']};
      font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
      font-weight: 400;
      line-height: 21px;
    }
  }
`

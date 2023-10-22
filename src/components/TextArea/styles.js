import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 275px;
  padding: 20px 16px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND['LIGHT']};

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
  font-weight: 400;
  line-height: 19px;

  resize: none;

  border: none;
  border-radius: 10px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY['DARK']};
    font-family: ${({ theme }) => theme.FONT.FAMILY['SECONDARY']};
    font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
    font-weight: 400;
    line-height: 19px;
  }
`

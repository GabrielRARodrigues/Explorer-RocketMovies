import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 16px 32px;

  background-color: ${({ theme }) => theme.COLORS['PINK']};

  border: none;
  border-radius: 10px;

  font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
  font-weight: 400;
  line-height: 21px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND['DARK']};
`

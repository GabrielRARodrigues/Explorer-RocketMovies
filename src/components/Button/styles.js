import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  padding: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 10px;

  background-color: ${({ theme, $secondary }) =>
    $secondary ? theme.COLORS.BACKGROUND['EXTRA_DARK'] : theme.COLORS['PINK']};

  font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
  text-align: center;
  font-weight: 500;
  color: ${({ theme, $secondary }) =>
    $secondary ? theme.COLORS['PINK'] : theme.COLORS.BACKGROUND['REGULAR']};

  &:disabled {
    filter: brightness(0.6);
    cursor: default;
  }
`

import styled from 'styled-components'

export const Container = styled.span`
  padding: 5px 16px;

  border-radius: 8px;

  background-color: ${({ theme, $red }) =>
    $red ? theme.COLORS.RED : theme.COLORS.BACKGROUND['REGULAR']};

  color: ${({ theme }) => theme.COLORS.GRAY['EXTRA_LIGHT']};
  font-family: ${({ theme }) => theme.FONT.FAMILY['SECONDARY']};
  font-size: ${({ theme }) => theme.FONT.SIZE['XSM']};
  font-weight: 400;
  line-height: 14px;
`

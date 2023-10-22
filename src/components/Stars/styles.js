import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 12px;
  color: ${({ theme }) => theme.COLORS['PINK']};
`

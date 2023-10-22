import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
  color: ${({ theme }) => theme.COLORS.PINK};
  font-weight: 400;
  line-height: 21px;
`

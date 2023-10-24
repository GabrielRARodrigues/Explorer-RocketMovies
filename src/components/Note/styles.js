import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
  width: 100%;
  padding: 32px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND['EXTRA_LIGHT']};

  border-radius: 16px;

  & > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.FONT.SIZE['LG']};
    font-weight: 700;
    line-height: 32px;

    margin-bottom: 8px;
  }

  & > p {
    color: ${({ theme }) => theme.COLORS.GRAY['REGULAR']};
    font-family: ${({ theme }) => theme.FONT.FAMILY['SECONDARY']};
    font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
    font-weight: 400;
    line-height: 19px;
    text-align: justify;

    margin-block: 16px 32px;
  }

  & > ul {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

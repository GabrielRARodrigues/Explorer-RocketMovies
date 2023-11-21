import styled from 'styled-components'

export const Container = styled.div`
  padding: 16px;

  display: flex;
  align-items: center;
  gap: 12px;

  border-radius: 10px;

  background-color: ${({ theme, $isNew }) =>
    $isNew ? 'transparent' : theme.COLORS.BACKGROUND['LIGHT']};

  border: ${({ theme, $isNew }) =>
    $isNew ? `3px dashed ${theme.COLORS.GRAY['DARK']}` : 'none'};

  & > input {
    font-family: ${({ theme }) => theme.FONT.FAMILY['SECONDARY']};
    font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 400;
    line-height: 19px;

    background: transparent;
    border: none;

    &::placeholder {
      font-family: ${({ theme }) => theme.FONT.FAMILY['SECONDARY']};
      font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
      color: ${({ theme }) => theme.COLORS.GRAY['DARK']};
      font-weight: 400;
      line-height: 19px;
    }

    &:read-only {
      cursor: default;
    }
  }

  & > button {
    display: flex;
    align-items: center;

    font-size: ${({ theme }) => theme.FONT.SIZE['LG']};
    color: ${({ theme }) => theme.COLORS.PINK};

    background: transparent;
    border: none;
  }
`

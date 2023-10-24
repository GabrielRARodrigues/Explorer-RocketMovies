import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header'
    'content';
`

export const Content = styled.main`
  width: 90%;
  max-width: 1140px;
  height: calc(100vh - 180px);
  margin: 32px auto;
  padding-right: 16px;

  grid-area: content;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }

  & > section {
    margin-top: 24px;

    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`

export const Status = styled.header`
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > div {
    display: flex;
    align-items: center;
  }

  & > div:first-child {
    gap: 20px;
  }
`

export const NoteInfo = styled.div`
  margin-bottom: 16px;
  gap: 12px;

  & > span {
    display: flex;
    align-items: center;
    gap: 8px;

    font-family: ${({ theme }) => theme.FONT.FAMILY['SECONDARY']};
    font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 400;
    line-height: 19px;

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    img {
      width: 16px;
      height: 16px;

      border: 1px solid ${({ theme }) => theme.COLORS.GRAY['EXTRA_DARK']};
      border-radius: 50%;
    }
  }
`

export const Tags = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > p {
    font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 400;
    line-height: 21px;
    text-align: justify;
    hyphens: auto;
  }
`

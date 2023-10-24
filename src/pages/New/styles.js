import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header'
    'content';
`
export const Content = styled.main`
  width: 90%;
  max-width: 1140px;
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

  & > div {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: start;

    margin-bottom: 40px;
  }
`
export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 40px;

  & > fieldset:first-of-type {
    display: flex;
    align-items: center;
    gap: 40px;

    input {
      flex: 1;
    }
  }

  legend {
    color: ${({ theme }) => theme.COLORS.GRAY['REGULAR']};
    font-size: calc(${({ theme }) => theme.FONT.SIZE['LG']} - 4px);
    font-weight: 400;
    line-height: 26px;

    margin-bottom: 24px;
  }
`
export const Bookmarks = styled.div`
  width: 100%;
  padding: 16px;

  display: flex;
  align-items: center;
  gap: 24px;

  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND['EXTRA_DARK']};
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  & > button {
    flex: 1;
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  & > main {
    margin-block: 56px;
    grid-area: content;
  }
`

export const Content = styled.div`
  width: 90%;
  max-width: 1120px;
  height: calc(100vh - 228px);
  margin-inline: auto;

  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'title'
    'notes';

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 38px;

    grid-area: title;
  }

  & > section {
    padding-right: 8px;
    
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
  }
`

export const Notes = styled.div`
  grid-area: notes;

  display: flex;
  flex-direction: column;
  gap: 24px;
`

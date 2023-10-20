import { createGlobalStyle } from 'styled-components'

export const Style = createGlobalStyle`

body { 
  background-color:  ${({ theme }) => theme.COLORS.BACKGROUND['DARK']};
  
  font-family: ${({ theme }) => theme.FONT.FAMILY['PRIMARY']};
  color: ${({ theme }) => theme.COLORS['WHITE']};
  font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
  -webkit-font-smoothing: antialiased;
}

button, a{
  transition: filter 0.2s;
}

button:hover, a:hover{
  filter: brightness(0.8);
}

`

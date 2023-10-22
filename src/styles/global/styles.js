import { createGlobalStyle } from 'styled-components'

export const Style = createGlobalStyle`

body { 
  background-color:  ${({ theme }) => theme.COLORS.BACKGROUND['DARK']};
  
  font-family: ${({ theme }) => theme.FONT.FAMILY['PRIMARY']};
  color: ${({ theme }) => theme.COLORS['WHITE']};
  font-size: ${({ theme }) => theme.FONT.SIZE['MD']};
  -webkit-font-smoothing: antialiased;
}

h1, 
h2,
h3,
h4, 
strong {
  font-weight: bold;
}

button, 
a {
  transition: filter 0.2s;
}

button:hover,
button:focus, 
a:hover {
  filter: brightness(0.8);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}


`

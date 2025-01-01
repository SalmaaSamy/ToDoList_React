import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Components/Theme';
import { lightTheme, darkTheme } from './Components/Theme';
import AppRoutes from './routes';

const ThemeIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 3rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  &:hover {
    color: ${({ theme }) => theme.toggleHover};
  }
`;


function App() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <ThemeIcon onClick={themeToggler}>🌓</ThemeIcon>
        <AppRoutes />
      </>
    </ThemeProvider>
  );
}

export default App;

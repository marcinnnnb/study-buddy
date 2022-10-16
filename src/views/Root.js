import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList.js';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.style';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <UsersList title="Users List" />
    </Wrapper>
  </ThemeProvider>
);

export default Root;

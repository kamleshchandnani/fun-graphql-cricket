import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme, { BaseStyles } from 'leaf-ui/theme/web';
import MatchCard from '../../match/MatchCard/MatchCard';

const Wrapper = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <BaseStyles />
      <MatchCard />
    </React.Fragment>
  </ThemeProvider>
);

export default Wrapper;

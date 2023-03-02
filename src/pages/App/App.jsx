import React from 'react';

import { Main } from '@/pages/Main';
import { Navbar } from '@/pages/Navbar';

import * as S from './components';


export const App = React.memo(() => (
  <S.Wrapper>
    <Navbar />
    <Main />
  </S.Wrapper>
));

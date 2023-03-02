import React from 'react';

import { Main } from '@/components/Main';
import { Navbar } from '@/components/Navbar';

import * as S from './components';


export const App = React.memo(() => (
  <S.Wrapper>
    <Navbar />
    <Main />
  </S.Wrapper>
));

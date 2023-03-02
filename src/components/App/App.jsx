import React from 'react';

import { Navbar } from '@/components/Navbar';

import * as S from './components';

export const App = React.memo(() => (
  <S.Container>
    <Navbar />
  </S.Container>
));

import React from 'react';

import { Balance } from '@/components/Balance';
import { Container } from '@/components/Container';
import { DatePicker } from '@/components/DatePicker';
import { Header } from '@/components/Header';

import * as S from './components';

export const Main = React.memo(() => (
  <S.Wrapper>
    <Header />

    <Container>
      <S.Meta>
        <Balance />
        <DatePicker />
      </S.Meta>
    </Container>
  </S.Wrapper>
));

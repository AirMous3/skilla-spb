import React from 'react';

import { Container } from '@/components/Container';
import { Header } from '@/components/Header';

import * as S from './components';

export const Main = React.memo(() => (
  <S.Wrapper>
    <Header />

    <Container>
      <S.Meta>

      </S.Meta>
    </Container>
  </S.Wrapper>
));

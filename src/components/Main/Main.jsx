import React from 'react';

import { Balance } from '@/components/Balance';
import { Container } from '@/components/Container';
import { DatePicker } from '@/components/DatePicker';
import { Filters } from '@/components/Filters';
import { Header } from '@/components/Header';
import { SearchFilter } from '@/components/SearchFilter';

import * as S from './components';


export const Main = React.memo(() => (
  <S.Wrapper>
    <Header />

    <Container>
      <S.Meta>
        <Balance />
        <DatePicker />
      </S.Meta>

      <S.FilterPanel>
        <SearchFilter />
        <Filters />
      </S.FilterPanel>
    </Container>
  </S.Wrapper>
));

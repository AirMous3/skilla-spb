import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCallsTH } from '@/entities';
import { Container } from '@/pages/Container';
import { Header } from '@/pages/Header';
import { Balance } from '@/pages/Main/Balance';
import { CallsTable } from '@/pages/Main/CallsTable';
import { DatePicker } from '@/pages/Main/DatePicker';
import { Filters } from '@/pages/Main/Filters';
import { SearchFilter } from '@/pages/Main/SearchFilter';

import * as S from './components';

export const Main = React.memo(() => {
  const dispatch = useDispatch();
  const calls = useSelector((state) => state.calls.data);

  console.log(calls);
  useEffect(() => {
    dispatch(getCallsTH('2023-03-02', '2023-03-03'));
  }, [dispatch]);
  return (
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

        <CallsTable />
      </Container>
    </S.Wrapper>
  );
});

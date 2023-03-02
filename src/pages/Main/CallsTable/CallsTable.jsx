import React from 'react';

import { TableRow } from './TableRow';
import * as S from './components';

export const CallsTable = React.memo(() => (
  <S.Wrapper>
    <S.TableHeader>
      <S.TableTd calspan={"2"}>Тип</S.TableTd>
      <S.TableTd>Время</S.TableTd>
      <S.TableTd>Сотрудник</S.TableTd>
      <S.TableTd>Звонок</S.TableTd>

      <S.TableCentreWrapper>
        <S.TableTd>Источник</S.TableTd>
        <S.TableTd>Оценка</S.TableTd>
      </S.TableCentreWrapper>

      <S.TableDurationWrapper>
        <S.TableTd>Длительность</S.TableTd>
      </S.TableDurationWrapper>
    </S.TableHeader>

    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
  </S.Wrapper>
));

import React from 'react';

import { TableRow } from './TableRow';
import * as S from './components';

export const CallsTable = React.memo(() => (
  <S.Wrapper>
    <S.TableHeader>
      <S.TableTd>Тип</S.TableTd>
      <S.TableTd>
        <span>Время</span>
      </S.TableTd>
      <S.TableTd>
        <span>Сотрудник</span>
      </S.TableTd>
      <S.TableTd>
        <span>Звонок</span>
      </S.TableTd>

      <S.TableCentreWrapper>
        <S.TableTd>
          <span>Источник</span>
        </S.TableTd>
        <S.TableTd>
          <span>Оценка</span>
        </S.TableTd>
      </S.TableCentreWrapper>

      <S.TableDurationWrapper>
        <S.TableTd>
          <span>Длительность</span>
        </S.TableTd>
      </S.TableDurationWrapper>
    </S.TableHeader>

    <tbody>
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
    </tbody>
  </S.Wrapper>
));

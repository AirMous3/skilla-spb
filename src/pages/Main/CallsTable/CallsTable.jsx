import React from 'react';

import { convertPhoneNumber } from '@/helpers/convertPhoneNumber';

import { TableRow } from './TableRow';
import * as S from './components';

export const CallsTable = React.memo(({ callsData }) => {
  return (
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
        {callsData.map(({ id, partner_data, date }) => {
          const phoneNumber = convertPhoneNumber(partner_data.phone);
          const callSource = partner_data.name;
          const callTime = date.slice(11, 16);

          return (
            <TableRow
              key={id}
              phoneNumber={phoneNumber}
              callSource={callSource}
              callTime={callTime}
            />
          );
        })}
      </tbody>
    </S.Wrapper>
  );
});

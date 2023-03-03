import React from 'react';

import * as S from './components';

export const TableRow = React.memo(() => (
  <S.Wrapper>
    <S.TableRowTd>
      <S.CallIcon />
    </S.TableRowTd>

    <S.TableRowTd>
      <S.CallTime>19:00</S.CallTime>
    </S.TableRowTd>

    <S.TableRowTd>
      <S.CallAvatar />
    </S.TableRowTd>

    <S.TableRowTd>
      <S.CallNumber>+7 (987) 567-17-12</S.CallNumber>
    </S.TableRowTd>

    <S.TableRowCenter>
      <S.CallSource>Rabota.ru</S.CallSource>
      <S.CallGrade>BAD</S.CallGrade>
    </S.TableRowCenter>

    <S.TableRowDuration>12:03</S.TableRowDuration>
  </S.Wrapper>
));

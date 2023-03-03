import React from 'react';

import * as S from './components';

export const TableRow = React.memo(({ phoneNumber, callSource, callTime }) => (
  <S.Wrapper>
    <S.TableRowTd>
      <S.CallIcon />
    </S.TableRowTd>

    <S.TableRowTd>
      <S.CallTime>{callTime}</S.CallTime>
    </S.TableRowTd>

    <S.TableRowTd>
      <S.CallAvatar />
    </S.TableRowTd>

    <S.TableRowTd>
      <S.CallNumber>{phoneNumber}</S.CallNumber>
    </S.TableRowTd>

    <S.TableRowCenter>
      <S.CallSource>{callSource}</S.CallSource>
      <S.CallGrade>BAD</S.CallGrade>
    </S.TableRowCenter>

    <S.TableRowDuration>12:03</S.TableRowDuration>
  </S.Wrapper>
));

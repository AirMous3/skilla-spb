import React from 'react';

import * as S from './components';

export const Header = React.memo(() => (
  <S.Container>
    <S.Date>Среда, 13 окт</S.Date>

    <S.CallsInfoWrapper>
      <S.CallInfo>
        Новые звонки <span>20 из 30 шт</span>
      </S.CallInfo>

      <S.CallInfo>
        Новые звонки <span>20 из 30 шт</span>
      </S.CallInfo>

      <S.CallInfo>
        Новые звонки <span>20 из 30 шт</span>
      </S.CallInfo>
    </S.CallsInfoWrapper>
  </S.Container>
));

import React from 'react';

import * as S from './components';

export const Balance = React.memo(() => (
  <S.Wrapper>
    <S.Title>
      Баланс: <span>272 ₽ </span>
    </S.Title>

    <S.Button />
  </S.Wrapper>
));

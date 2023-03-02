import React from 'react';

import * as S from './components';

export const SearchFilter = React.memo(() => (
  <S.Wrapper>
    <S.Icon />
    <span>Поиск по звонкам</span>
  </S.Wrapper>
));

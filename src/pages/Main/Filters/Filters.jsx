import React from 'react';

import { filtersConfig } from './config';

import * as S from './components';


export const Filters = React.memo(() => (
  <S.Wrapper>
    {filtersConfig.map(({ title }) => (
      <S.Item>{title}</S.Item>
    ))}
  </S.Wrapper>
));

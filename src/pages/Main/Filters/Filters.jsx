import React from 'react';

import * as S from './components';
import { filtersConfig } from './config';

export const Filters = React.memo(() => (
  <S.Wrapper>
    {filtersConfig.map(({ title }, index) => (
      <S.Item key={index}>{title}</S.Item>
    ))}
  </S.Wrapper>
));

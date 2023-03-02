import React from 'react';

import logo from '@/assets/images/logo.png';

import * as S from './components';
import { navConfig } from './config';

export const Navbar = React.memo(() => (
  <S.Wrapper>
    <S.Logo src={logo} />

    <S.NavLinks>
      {navConfig.map(({ title, icon }) => (
        <S.NavLink>
          <S.NavIcon icon={icon} />
          {title}
        </S.NavLink>
      ))}
    </S.NavLinks>
  </S.Wrapper>
));

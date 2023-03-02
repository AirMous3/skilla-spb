import React from 'react';

import logo from '@/assets/images/logo.png';

import * as S from './components';
import { navConfig } from './config';

export const Navbar = React.memo(() => (
  <S.Container>
    <S.Logo src={logo} />
    {navConfig.map(({ title, icon }) => (
      <S.NavItem>
          <S.NavIcon icon={icon}/>
          {title}
      </S.NavItem>
    ))}
  </S.Container>
));

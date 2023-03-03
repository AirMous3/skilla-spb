import React from 'react';

import logo from '@/assets/images/logo.png';

import * as S from './components';
import { navConfig } from './config';

export const Navbar = React.memo(() => (
  <S.Wrapper>
    <S.Logo src={logo} />

    <S.NavLinks>
      {navConfig.map(({ title, icon, active }, index) => (
        //  Я знаю, что лучше избегать index как ключ, но если наш лист статичный(ничего не удаляется и не добавляется), то можно использовать и index
        <S.NavLink active={active} key={index}>
          <S.NavIcon icon={icon} />
          {title}
        </S.NavLink>
      ))}
    </S.NavLinks>
  </S.Wrapper>
));

import styled from 'styled-components/macro';

import arrow from '@/assets/icons/arrow-icon.svg';

export const Wrapper = styled.ul`
  display: flex;
  margin-right: -32px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 148%;
  color: #5e7793;
  opacity: 0.87;
  margin-right: 54px;
  cursor: pointer;

  &:after {
    position: relative;
    content: '';
    background-image: url(${arrow});
    width: 6px;
    height: 10px;
    background-size: 6px 10px;
    left: 22px;
    transform: rotate(270deg);
    cursor: pointer;
  }
`;

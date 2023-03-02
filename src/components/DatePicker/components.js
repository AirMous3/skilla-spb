import styled from 'styled-components/macro';

import arrow from '@/assets/icons/arrow-icon.svg';
import calendarIcon from '@/assets/icons/calendar-icon.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 22px;

  &:before {
    position: relative;
    content: '';
    background-image: url(${arrow});
    width: 6px;
    height: 10px;
    background-size: 6px 10px;
    right: 22px;
    cursor: pointer;
  }

  &:after {
    position: relative;
    content: '';
    background-image: url(${arrow});
    width: 6px;
    height: 10px;
    background-size: 6px 10px;
    left: 22px;
    transform: rotate(180deg);
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  background-image: url(${calendarIcon});
  background-repeat: no-repeat;
  width: 16px;
  height: 18px;
  background-size: 16px 18px;
  margin-right: 8px;
`;

export const Value = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #005ff8;
`;

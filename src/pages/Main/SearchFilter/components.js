import styled from 'styled-components/macro';

import searchIcon from '@/assets/icons/search-icon.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    line-height: 140%;
    color: #5e7793;
  }
`;

export const Icon = styled.div`
  background-image: url(${searchIcon});
  width: 16px;
  height: 16px;
  background-size: 16px 16px;
  background-repeat: no-repeat;
  margin-right: 12px;
`;

import styled from 'styled-components/macro';

import balanceButton from '@/assets/icons/balance-button.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 48px;
  max-width: 145px;
  padding: 10px 12px 9px;
  box-sizing: border-box;
  margin-right: 76px;
  margin-left: auto;
`;

export const Title = styled.div`
  font-size: 14px;
  line-height: 148%;
  color: #899cb1;
  font-weight: 400;
  margin-right: 10px;

  span {
    font-weight: 500;
    color: #000000;
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  background-image: url(${balanceButton});
  width: 24px;
  height: 24px;
  background-size: 24px 24px;
  background-repeat: no-repeat;
`;

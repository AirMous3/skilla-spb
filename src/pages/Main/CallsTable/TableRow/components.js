import styled from 'styled-components/macro';

import callIcon from '@/assets/icons/incoming-call-icon.svg';
import callAvatar from '@/assets/images/call-avatar.png';

export const Wrapper = styled.tr`
  border-top: 1px solid #eaf0fa;
  padding-top: 16px;
  padding-bottom: 17px;
  display: flex;
  align-items: center;
`;

export const TableRowTd = styled.td`
  min-width: 10%;
`;

export const CallIcon = styled.div`
  background-image: url(${callIcon});
  background-repeat: no-repeat;
  width: 12.52px;
  height: 12.52px;
`;

export const CallTime = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 140%;
  color: #122945;
`;

export const CallAvatar = styled.div`
  background-image: url(${callAvatar});
  background-repeat: no-repeat;
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const CallNumber = styled.div``;

export const TableRowCenter = styled.div`
  min-width: 40%;
  display: flex;
  justify-content: space-evenly;
`;

export const CallSource = styled.div``;

export const CallGrade = styled.div``;

export const TableRowDuration = styled.div`
  width: 20%;
  text-align: end;
  padding-right: 40px;
`;

import styled from 'styled-components/macro';

export const Container = styled.div`
  padding: 21px 120px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0 4px 5px #e9edf3;
  display: flex;
  align-items: center;
`;

export const Date = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 148%;
  color: #899cb1;
  margin-right: 86px;
`;

export const CallsInfoWrapper = styled.div`
  display: flex;
`;

export const CallInfo = styled.div`
  margin-right: 56px;

  span {
    color: rgba(0, 167, 117, 1);
  }
`;

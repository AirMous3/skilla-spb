import styled from 'styled-components/macro';

export const Wrapper = styled.table`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  padding-top: 26px;
  padding-bottom: 76px;
  margin-top: 20px;
  background: #ffffff;
  box-shadow: 0 4px 5px #e9edf3;
  border-radius: 8px;
`;

export const TableHeader = styled.tr`
  display: flex;
  padding-bottom: 21px;
`;

export const TableTd = styled.td`
  min-width: 10%;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #899cb1;

  span {
    cursor: pointer;
  }
`;

export const TableDurationWrapper = styled.div`
  display: flex;
  width: 20%;
  justify-content: right;
  padding-right: 40px;
`;

export const TableCentreWrapper = styled.td`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
`;

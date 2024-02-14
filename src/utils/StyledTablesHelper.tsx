import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

export const StyledHeader = styled.th`
  background-color: red;
  color: #ffffff;
  padding: 12px 15px;
`;

export const StyledCell = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #dddddd;
`;

export const StyledRow = styled.tr`
  &:last-of-type {
    border-bottom: 2px solid #009879;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const StyledHeadRow = styled.tr`
  &:hover {
    background-color: inherit;
  }
`;

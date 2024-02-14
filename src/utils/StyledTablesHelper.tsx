import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 600px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    font-size: 0.8em;
    min-width: 500px; // Remove min-width to allow table to shrink
    box-shadow: none; // Optional: remove shadow for a cleaner look on small screens
  }
`;

export const StyledHeader = styled.th`
  background-color: #509274;
  color: black;
  font-size: 1.5rem;
  padding: 12px 15px;

  @media (max-width: 768px) {
    padding: 8px 10px; // Smaller padding on mobile
  }
`;

export const StyledCell = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #dddddd;
  font-size: 1.5rem;
  background-color: #485965;

  @media (max-width: 768px) {
    padding: 8px 10px; // Smaller padding on mobile
  }
`;

export const StyledRow = styled.tr`
  &:last-of-type {
    border-bottom: 2px solid #509274;
  }
`;

export const StyledHeadRow = styled.tr`
  &:hover {
    background-color: inherit;
  }
`;

import styled from 'styled-components';

export const ListEl = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

export const ListItem = styled.li`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px solid grey;
`;

export const ListButton = styled.button`
  margin-top: 10px;
  width: 60px;
`;

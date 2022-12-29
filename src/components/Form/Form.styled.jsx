import styled from 'styled-components';

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const InputEl = styled.input``;

export const ButtonEl = styled.button`
  width: 100px;
  padding: 10px;
  background-color: rgb(255, 219, 99);
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

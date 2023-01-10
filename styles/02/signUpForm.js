import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: 1px solid gray;
`;

export const Label = styled.label`
  margin-right: 10px;
`;

export const ErrorMessage = styled.div`
  color: salmon;
  font-size: small;
`;

export const Button = styled.button`
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: cornflowerblue;
  color: white;
  margin-top: 20px;
`;

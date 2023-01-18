import styled from '@emotion/styled';

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 480px;
  align-items: center;
  margin: 20px auto;
  border: 1px solid gray;
  padding: 20px 40px;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  font-size: 18px;
  margin: 20px;
  padding: 4px;

  span {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 500;
  }
`;

export const SubmitButton = styled.button`
border: none;
border-radius: 4px;
cursor: pointer;
padding: 5px 10px;
font-size: 18px;
background-color: coral;
color: white;
margin-top: 20px;
`
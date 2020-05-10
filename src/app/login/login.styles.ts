import styled from 'styled-components';
import { Container } from '../../ui/container/container.styles';
import { Form, Input, Button } from 'antd';

export const FullScreen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
`;

export const LoginContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding: 40px 20px;
  justify-content: space-around;
`;

export const ShoppingImage = styled.img`
  flex: 1;
`;

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 20px;
`;

export const LoginTitle = styled.h2`
  font-size: 41px;
  font-weight: 700;
  margin-bottom: 50px;
`;

export const StyledForm = styled(Form)``;

export const StyledFormItem = styled(Form.Item)`
  font-weight: 500;
`;

export const StyledInput = styled(Input)``;

export const StyledPassword = styled(Input.Password)``;

export const LoginButton = styled(Button)`
  margin-top: 20px;
  padding: 0 60px;
  height: 40px;
  font-size: 16px;
`;

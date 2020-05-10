import React from 'react';
import { UserOutlined, LoginOutlined } from '@ant-design/icons';
import {
  LoginContainer,
  LoginTitle,
  ShoppingImage,
  StyledForm,
  StyledFormItem,
  StyledInput,
  LoginButton,
  FormContainer,
  StyledPassword,
  FullScreen,
} from './login.styles';
import { useAuth } from '../../hooks/use-auth/use-auth.hook';
import { login } from '../../context/auth/auth.action-creators';
import Router from 'next/router';
import { getLink, AppRoute } from '../../router/app-routes';
import { authStorage } from '../../context/auth/auth.storage';

export const Login = () => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
  });

  const { dispatch } = useAuth();

  const onLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = data;

    if (email === 'admin' && password === 'admin') {
      authStorage.setAccessToken(email);
      dispatch(login(email));
      Router.push(getLink(AppRoute.HOME));
    }
  };

  const onChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <FullScreen>
      <LoginContainer>
        <ShoppingImage
          alt="Shopping"
          src={`${process.env.ASSET_PREFIX ?? ''}/shopping.svg`}
        />
        <FormContainer>
          <LoginTitle>
            Hello,<br></br> Welcome back!
          </LoginTitle>
          <StyledForm layout="vertical" onSubmitCapture={onLogin}>
            <StyledFormItem label="Email address">
              <StyledInput
                placeholder="Enter your email address"
                suffix={<UserOutlined />}
                value={data.email}
                name="email"
                onChange={onChange}
              />
            </StyledFormItem>
            <StyledFormItem label="Password">
              <StyledPassword
                placeholder="Enter your password"
                value={data.password}
                name="password"
                onChange={onChange}
              />
            </StyledFormItem>
            <StyledFormItem>
              <LoginButton type="primary" htmlType="submit">
                <LoginOutlined />
                Login
              </LoginButton>
            </StyledFormItem>
          </StyledForm>
        </FormContainer>
      </LoginContainer>
    </FullScreen>
  );
};

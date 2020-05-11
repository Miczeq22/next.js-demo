import styled from 'styled-components';
import { Container } from '../../../ui/container/container.styles';

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotFoundContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NotFoundImage = styled.img`
  width: 70%;
`;

export const Label = styled.h2`
  font-weight: 700;
  font-size: 21px;
  margin: 10px 0;
`;

export const GoToHomeLink = styled.a`
  font-size: 19px;
  font-weight: 500;
  text-decoration: underline;
`;

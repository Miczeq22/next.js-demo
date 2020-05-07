import styled from 'styled-components';
import { Container } from '../container/container.styles';

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 50%;
`;

export const StyledLabel = styled.h2`
  font-size: 31px;
  font-weight: 700;
  margin-top: 30px;
`;

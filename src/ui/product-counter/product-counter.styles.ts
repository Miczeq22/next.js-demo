import styled from 'styled-components';
import { Button } from 'antd';
import { Container } from '../container/container.styles';

export const CounterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ButtonsContainer = styled.section`
  display: flex;
  align-items: center;
`;

export const CounterButton = styled(Button)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  line-height: 30px;
  font-size: 21px;
  padding: 0;
`;

export const CounterNumber = styled.div`
  margin: 0 15px;
  font-weight: 500;
  font-size: 21px;
`;

export const PriceContainer = styled.section`
  font-weight: 700;
  font-size: 31px;
`;

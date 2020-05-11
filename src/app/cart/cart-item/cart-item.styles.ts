import styled from 'styled-components';
import { Button } from 'antd';
import { Container } from '../../../ui/container/container.styles';

export const ItemContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.color.white};
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid #efefef;

  & > .product-counter {
    margin: 0 10px;
  }
`;

export const ProductImage = styled.img`
  width: 15%;
`;

export const ProductName = styled.h2`
  font-weight: 700;
  font-size: 21px;
  margin: 0 30px;
`;

export const RemoveButton = styled(Button)`
  padding: 0 30px;
  height: 60px;
  font-size: 21px;
  border-radius: 10px;
`;

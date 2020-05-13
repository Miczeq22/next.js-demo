import styled from 'styled-components';
import { Button } from 'antd';
import { Container } from '../../../ui/container/container.styles';

export const ItemContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid #efefef;

  & > .product-counter {
    margin: 0 20px;
    flex: 1;

    & .price-container {
      font-size: 23px;
    }
  }
`;

export const ProductImage = styled.div`
  min-height: 100px;
  min-width: 100px;
  max-height: 100px;
  max-width: 100px;
  background-position: center;
  background-size: cover;
`;

export const ProductName = styled.h2`
  font-weight: 700;
  font-size: 21px;
  margin: 0 30px;
  flex: 1;
`;

export const RemoveButton = styled(Button)`
  padding: 0 20px;
  height: 50px;
  font-size: 21px;
  border-radius: 10px;
`;

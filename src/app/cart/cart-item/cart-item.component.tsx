import React from 'react';
import {
  ItemContainer,
  ProductImage,
  ProductName,
  RemoveButton,
} from './cart-item.styles';
import { DeleteOutlined } from '@ant-design/icons';
import { ProductCounter } from '../../../ui/product-counter/product-counter.component';

export interface CartItemProps {
  name: string;
  imageUrl: string;
  count: number;
  price: number;
}

export const CartItem = ({ name, imageUrl, price, count }: CartItemProps) => {
  const onCountChange = (cents: number) => {};

  return (
    <ItemContainer>
      <ProductImage alt="Product" src={imageUrl} />
      <ProductName>{name}</ProductName>
      <ProductCounter
        initialPrice={price}
        initialCount={count}
        onChange={onCountChange}
      />
      <RemoveButton>
        <DeleteOutlined />
      </RemoveButton>
    </ItemContainer>
  );
};

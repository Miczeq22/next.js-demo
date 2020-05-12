import React from 'react';
import {
  ItemContainer,
  ProductImage,
  ProductName,
  RemoveButton,
} from './cart-item.styles';
import { DeleteOutlined } from '@ant-design/icons';
import { ProductCounter } from '../../../ui/product-counter/product-counter.component';
import { useCart } from '../../../hooks/use-cart/use-cart.hook';
import {
  setProductAmount,
  removeProductFromCart,
} from '../../../context/cart/cart.action-creators';

export interface CartItemProps {
  id: string;
  name: string;
  imageUrl: string;
  count: number;
  price: number;
}

export const CartItem = ({
  id,
  name,
  imageUrl,
  price,
  count,
}: CartItemProps) => {
  const { dispatch } = useCart();

  const onCountChange = (amount: number) => {
    dispatch(setProductAmount({ id, amount }));
  };

  const onRemove = () => dispatch(removeProductFromCart(id));

  return (
    <ItemContainer>
      <ProductImage alt="Product" src={imageUrl} />
      <ProductName>{name}</ProductName>
      <ProductCounter
        initialPrice={price}
        initialCount={count}
        onChange={onCountChange}
      />
      <RemoveButton onClick={onRemove}>
        <DeleteOutlined />
      </RemoveButton>
    </ItemContainer>
  );
};

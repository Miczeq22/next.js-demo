import React from 'react';
import {
  ListContainer,
  StyledList,
  StyledListItem,
} from './cart-item-list.styles';
import { CartItemProps, CartItem } from '../cart-item/cart-item.component';
import { EmptyContainer } from '../../../ui/empty-container/empty-container.component';

interface CartItemListProps {
  items: CartItemProps[];
}

const easing = [0.6, -0.05, 0.01, 0.99];

const listItemVariants = {
  initial: (index: number) => ({
    y: 60 * index,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  }),
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const CartItemList = ({ items }: CartItemListProps) => {
  return (
    <ListContainer>
      {Boolean(items.length) ? (
        <StyledList>
          {items.map((item, index) => (
            <StyledListItem
              key={`cart-item-${index}`}
              initial="initial"
              animate="animate"
              variants={listItemVariants}
              custom={index}
            >
              <CartItem {...item} />
            </StyledListItem>
          ))}
        </StyledList>
      ) : (
        <EmptyContainer label="There are no items in cart..." />
      )}
    </ListContainer>
  );
};

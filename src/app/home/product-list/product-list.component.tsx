import React from 'react';
import { StyledList, StyledListItem } from './product-list.styles';
import {
  ProductThumbnail,
  ProductThumbnailProps,
} from '../product-thumbnail/product-thumbnail.component';
import { EmptyContainer } from '../../../ui/empty-container/empty-container.component';

interface ProductListProps {
  products: ProductThumbnailProps[];
}

const productItemVariants = {
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
    },
  }),
  hidden: (index: number) => ({
    opacity: 0,
    y: index * 30,
  }),
};

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <StyledList>
      {!products.length ? (
        <EmptyContainer label="There are no products yet..." />
      ) : (
        <>
          {products.map((product, index) => (
            <StyledListItem
              initial="hidden"
              animate="visible"
              variants={productItemVariants}
              custom={index + 1}
              key={`product-thumbnail-${index}`}
            >
              <ProductThumbnail {...product} />
            </StyledListItem>
          ))}
        </>
      )}
    </StyledList>
  );
};

import React from 'react';
import { HomeContainer } from './home.styles';
import { Header } from '../../ui/header/header.component';
import { ProductThumbnailProps } from './product-thumbnail/product-thumbnail.component';
import { ProductList } from './product-list/product-list.component';

interface HomeProps {
  products: ProductThumbnailProps[];
}

export const Home = ({ products }: HomeProps) => {
  return (
    <HomeContainer>
      <Header />
      <ProductList products={products} />
    </HomeContainer>
  );
};

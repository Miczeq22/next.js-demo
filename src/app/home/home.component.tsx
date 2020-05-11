import React from 'react';
import { HomeContainer } from './home.styles';
import { Header } from '../../ui/header/header.component';
import { ProductThumbnailProps } from './product-thumbnail/product-thumbnail.component';
import { ProductList } from './product-list/product-list.component';
import { useStickyNav } from '../../hooks/use-sticky-nav/use-sticky-nav.hook';

interface HomeProps {
  products: ProductThumbnailProps[];
}

export const Home = ({ products }: HomeProps) => {
  const stickyRef = React.useRef(null);

  const isStickyHeader = useStickyNav({ stickyRef });

  return (
    <HomeContainer>
      <Header sticky={isStickyHeader} />
      <div ref={stickyRef}>
        <ProductList products={products} />
      </div>
    </HomeContainer>
  );
};

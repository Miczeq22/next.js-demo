import React from 'react';
import {
  GoToHomeLink,
  Label,
  NotFoundContainer,
  NotFoundImage,
  PageContainer,
} from './product-not-found.styles';
import Link from 'next/link';
import { getLink, AppRoute } from '../../../router/app-routes';

export const ProductNotFound = () => {
  return (
    <PageContainer>
      <NotFoundContainer>
        <NotFoundImage src="/no-article.svg" alt="No product found" />
        <Label>This product does not exist.</Label>
        <Link href={getLink(AppRoute.HOME)}>
          <GoToHomeLink>Go back to home</GoToHomeLink>
        </Link>
      </NotFoundContainer>
    </PageContainer>
  );
};

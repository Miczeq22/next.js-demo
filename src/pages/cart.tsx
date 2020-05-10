import React from 'react';
import { PermissionProvider, PermissionType } from '../hoc/permission.hoc';

const CartPage = () => {
  return (
    <PermissionProvider permission={PermissionType.PRIVATE}>
      <h1>Cart</h1>
    </PermissionProvider>
  );
};

export default CartPage;

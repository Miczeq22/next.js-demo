import React from 'react';
import { PermissionProvider, PermissionType } from '../hoc/permission.hoc';
import { Cart } from '../app/cart/cart.component';
import { Header } from '../ui/header/header.component';
import { useStickyNav } from '../hooks/use-sticky-nav/use-sticky-nav.hook';

const CartPage = () => {
  const stickyRef = React.useRef(null);

  const isStickyHeader = useStickyNav({ stickyRef });

  return (
    <PermissionProvider permission={PermissionType.PRIVATE}>
      <div style={{ backgroundColor: '#fdfdfd' }}>
        <Header sticky={isStickyHeader} />
        <div ref={stickyRef}>
          <Cart />
        </div>
      </div>
    </PermissionProvider>
  );
};

export default CartPage;

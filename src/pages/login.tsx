import React from 'react';
import { Login } from '../app/login/login.component';
import { PermissionProvider, PermissionType } from '../hoc/permission.hoc';

const LoginPage = () => {
  return (
    <PermissionProvider permission={PermissionType.GUEST_ONLY}>
      <Login />
    </PermissionProvider>
  );
};

export default LoginPage;

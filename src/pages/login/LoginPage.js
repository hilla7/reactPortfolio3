import React from 'react';
import PageLayout from '../../layouts/page-layout/PageLayout';

import LoginForm from './containers/login/LoginForm';

const LoginPage = () => (
   <PageLayout title="Login">
     <LoginForm/>
   </PageLayout>
);

export default LoginPage;
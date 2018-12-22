import React from 'react';
import PortfolioForm from './containers/portfolio-form/PortfolioForm';
import PageLayout from '../../layouts/page-layout/PageLayout';

const PortfolioItemPage = () => (
   <PageLayout title="Add New Item">
      <PortfolioForm />
   </PageLayout>
);

export default PortfolioItemPage;
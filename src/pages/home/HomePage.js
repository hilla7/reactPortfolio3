import React from 'react';
import Home from './components/home/Home'
import PageLayout from '../../layouts/page-layout/PageLayout';

const HomePage = () => (
    <PageLayout title="Home">
        <Home />
    </PageLayout>
);

export default HomePage;
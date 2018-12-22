import React from 'react';
import './PageLayout.css';

const PageLayout = ({ title, children }) => (
    <React.Fragment>
        <h1 className="page-title"> {title} </h1>
        {children}
    </React.Fragment>
);

export default PageLayout;

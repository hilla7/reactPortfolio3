import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import PortfolioItem from '../components/shared/portfolio-item/PortfolioItem';
import { getPortfolioItems } from '../mocks/portfolio-items.mock';
import PortfolioItemsList from '../components/shared/portfolio-items-list/PortfolioItemsList';
import translations from '../services/translation.service';
import Sidebar from '../components/app/sidebar/Sidebar';
import { MemoryRouter as Router } from 'react-router-dom';
import Header from '../components/app/header/Header';

const items = getPortfolioItems();
const item = items[0];

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('PortfolioItem')} />)
);

storiesOf('PortfolioItem', module)
  .add('is cart item', () => (
    <PortfolioItem editItem={action('edited')}
      deleteItem={action('deleted')}
      isCart={true}
      item={item} />))
  .add('is list item', () => (
    <PortfolioItem editItem={action('edited')}
      deleteItem={action('deleted')}
      isCart={false}
      item={item} />));

storiesOf('PortfolioItemsList', module)
  .add('is cart list', () => (
    <PortfolioItemsList
      onDeleteItem={action('deleted')}
      onEditItem={action('edited')}
      onItemClicked={action('clicked')}
      isCart={true}
      portfolioItems={items} />))
  .add('is display list', () => (
    <PortfolioItemsList
      onDeleteItem={action('deleted')}
      onEditItem={action('edited')}
      onItemClicked={action('clicked')}
      isCart={false}
      portfolioItems={items} />));

storiesOf('Sidebar', module)
  .add('Sidebar menu', () => (
    <Router>
      <Sidebar locale={translations.en} />
    </Router>
  ));

storiesOf('Header', module)
  .add('locale changes', () => (
    <Header onLocaleChanged={action('locale changed')} />
  ));
import React from 'react';
import {withRouter} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const RouteTransition = ({location, children}) => {
  const split = location.pathname.split('/');
  const currentKey = split.slice(1, split.length).join('/') || '/';
  const timeout = { enter: 300, exit: 200 };

  return (
    <TransitionGroup component="main" className="page-main">
      <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear>
        <div>{children}</div>
      </CSSTransition>
    </TransitionGroup>
  )
};

export default withRouter(RouteTransition);

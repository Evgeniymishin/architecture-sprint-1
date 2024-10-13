import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootConfig from './components/root-config';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: RootConfig,
  errorBoundary(err, info, props) {
    return <div>Error in UserProfile Microfrontend</div>;
  },
});

export const { bootstrap, mount, unmount } = reactLifecycles;

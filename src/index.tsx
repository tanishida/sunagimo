import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppHooks} from './components/appHooks';

const container: HTMLElement = document.getElementById('root')!;

ReactDOM.render(    
  <AppHooks />
  , container
);
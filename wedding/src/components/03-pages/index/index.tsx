import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../app/App';
import '../../../assets/sass/03-generic/_index.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

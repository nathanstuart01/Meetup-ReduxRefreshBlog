import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './UI/containers/App';
import BlogStore from './store/BlogStore';


ReactDOM.render(<Provider={BlogStore}>
  <App />, </Provider>, document.getElementById('root'));

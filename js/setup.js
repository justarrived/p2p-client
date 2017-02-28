import React from "react";
import { Provider } from 'react-redux';

import configureStore from "./store/configureStore";
import IndexScene from './index.scene';
import App from './app';

const store = configureStore();

class Setup extends React.Component {


  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Setup;

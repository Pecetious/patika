import {Provider} from 'react-redux';
import App from './Router';
import store from './redux/store';

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

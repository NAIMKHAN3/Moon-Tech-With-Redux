import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/routes';
import { Provider } from 'react-redux';
import store from './Redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './async_actions/store/store';
import UsersData from './async_actions/state/UsersData';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <UsersData/>
        </Provider>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;

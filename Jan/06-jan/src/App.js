import logo from './logo.svg';
import './App.css';
import UserData from './components/UserData';
import { Provider } from 'react-redux';
import { user_reducer } from './redux/user_store';

function App() {
  return (
    <div className="App">
      <Provider store={user_reducer} >
        <UserData />
      </Provider>
    </div>
  );
}

export default App;

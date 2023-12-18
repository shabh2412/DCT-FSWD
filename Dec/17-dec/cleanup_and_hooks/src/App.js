import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Timer } from './components/Timer';

function App() {
  const [show_app, set_show_app] = useState(false);

  const toggle_show = () => set_show_app(prev => !prev);
  return (
    <div>
      <button onClick={toggle_show}>{show_app ? "Hide App" : "Show App"}</button>
      {show_app && <Timer />}
    </div>
  );
}

export default App;

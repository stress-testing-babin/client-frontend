import { useState } from 'react';
import './App.css';
import { BasicTable } from './components/BasicTable';
import TestConfig from './components/ConfigureTest';

function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="App">
      <h1>Overview</h1>
      <BasicTable />
      <button
        id="NewTestButton"
        className="btn btn-primary btn-lg mt-3"
        onClick={() => setIsToggled(!isToggled)}
      >Configure new Test
      </button>
      {isToggled && <TestConfig />} 
    </div>
  );
}

export default App;

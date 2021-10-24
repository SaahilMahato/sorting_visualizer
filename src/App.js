import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import InputForm from './Components/InputForm';

function App() {

  const [algo, setAlgo] = useState('');
  const [numbers, setNumbers] = useState([]);

  const onActivate = (config) => {
    setAlgo(config.algo);
    setNumbers(config.numbers.split(' ').map(Number));
  }

  return (
    <div className="App">
      <Header />
      <InputForm onActivate={onActivate} />
    </div>
  );
}

export default App;

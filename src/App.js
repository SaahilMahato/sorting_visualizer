import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import InputForm from './Components/InputForm';
import Graph from './Components/Graph';
import Footer from './Components/Footer';

function App() {

  const [algo, setAlgo] = useState('');
  const [numbers, setNumbers] = useState([]);

  const [i, setIndex] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);

  const onActivate = (config) => {
    setAlgo(config.algo);
    setNumbers(config.numbers.split(' ').map(Number));
    setIsDisabled(false);

    if (config.algo === 'selection_sort')
      setIndex(0);
    else
      setIndex(1);
  }

  const iterate = () => {
    switch (algo) {
      case 'selection_sort':
        selectionSort();
        break;
      case 'insertion_sort':
        insertionSort();
        break;
      case 'bubble_sort':
        bubbleSort();
        break;
      default:
        alert('No valid algorithm selected');
    };
    setIndex(i+1);
    if (i >= numbers.length-1)
      setIsDisabled(true);
  }

  const selectionSort = () => {
    let arr = numbers;

    let min_index = i;
    for (let j=i+1; j<arr.length; ++j) {
      if (arr[j] < arr[min_index])
        min_index = j;
    }
    let temp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = temp;

    setNumbers(arr);
  }

  const insertionSort = () => {
    let arr = numbers;

    let temp = arr[i];
    let empty_index = i;
    while(empty_index > 0 && arr[empty_index-1] > temp) {
      arr[empty_index] = arr[empty_index-1];
      empty_index = empty_index-1;
    }
    arr[empty_index] = temp;

    setNumbers(arr);
  }

  const bubbleSort = () => {
    let arr = numbers;

    for (let j=0; j<arr.length-i; ++j) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }

    setNumbers(arr);
  }

  return (
    <div className="App">
      <Header />
      <InputForm isDisabled={isDisabled} onActivate={onActivate} iterate={iterate} />
      <Graph numbers={numbers}/>
      <Footer />
    </div>
  );
}

export default App;

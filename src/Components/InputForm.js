import { useState } from 'react';

const InputForm = ( {onActivate} ) => {

    const [algo, setAlgo] = useState('selection_sort');
    const [numbers, setNumbers] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if(!algo || !numbers) {
            alert('Please select an algorithm and enter input');
            return;
        }
        
        onActivate({algo, numbers});
    }

    return (
        <form className="form-inline" onSubmit={onSubmit}>
            <label htmlFor="algo">Algorithm:</label>
            <select id='algo' onChange={(e)=>setAlgo(e.value)}>
                <option value='selection_sort'>Selection Sort</option>
                <option value='insertion_sort'>Insertion Sort</option>
                <option value='bubble_sort'>Bubble Sort</option>
                <option value='quick_sort'>Quick Sort</option>
                <option value='merge_sort'>Merge Sort</option>
            </select>
            <label htmlFor="num">Numbers:</label>
            <input id='num' type="text" placeholder="Enter space separated numbers"
            onChange={(e)=>setNumbers(e.target.value)} />
            <button type="submit">Activate</button>
            <button>Next Step</button>
        </form>
    );
}

export default InputForm;
import { useState } from 'react';

const InputForm = ( {isDisabled, onActivate, iterate} ) => {

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

    const onNext = (e) => {
        e.preventDefault();
        if(!algo || !numbers) {
            alert('Please select an algorithm and enter input and activate');
            return;
        }

        iterate();
    }

    return (
        <div className='container'>
            <form className="form-inline" onSubmit={onSubmit}>
                <label htmlFor="algo">Algorithm:</label>
                <select id='algo' onChange={(e)=>setAlgo(e.target.value)}>
                    <option value='selection_sort'>Selection Sort</option>
                    <option value='insertion_sort'>Insertion Sort</option>
                    <option value='bubble_sort'>Bubble Sort</option>
                </select>
                <label htmlFor="num">Numbers:</label>
                <input id='num' type="text" placeholder="Enter space separated numbers"
                    onChange={(e)=>setNumbers(e.target.value)} />
                <button type="submit">Activate</button>
                <button disabled={isDisabled} onClick={onNext}>Next Step</button>
            </form>
        </div>
    );
}

export default InputForm;
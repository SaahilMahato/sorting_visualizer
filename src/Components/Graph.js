import { BarChart, Bar, XAxis, YAxis } from 'recharts'; 

const Graph = ( {numbers} ) => {
    let data = [];

    for (let i=0; i<numbers.length; ++i) {
        data.push({'number': numbers[i]});
    }

    return (
        <div className='container'>
            <BarChart width={1800} height={750} data={data}>
                <XAxis dataKey="number" />
                <YAxis />
                <Bar dataKey="number" fill="#8884d8" />
            </BarChart>
        </div>
    );
}

export default Graph;
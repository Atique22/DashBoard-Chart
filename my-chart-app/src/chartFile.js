import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { parse as csvParse } from 'csv-parse/sync';


export default function MyGraphComponent (){
  const [data, setData] = useState([]);

  const handleFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const csvData = e.target.result;
      const parsedData = csvParse(csvData, { columns: true });
      setData(parsedData);
    }
    reader.readAsText(file);
  }

  return (
    <div>

    <div>    input is here 
      <input type="file" onChange={handleFile} /></div>
      {data.length > 0 && (
        <LineChart width={600} height={300} data={data} >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      )}
    </div>
  );
}


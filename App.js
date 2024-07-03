import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Trainees() {
  const [trainees, setTrainees] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('/api/trainees');
      setTrainees(result.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Trainees List</h1>
      <ul>
        {trainees.map(trainee => (
          <li key={trainee._id}>{trainee.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Trainees;

import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  useEffect(() => {
    axios.get('http://localhost:8000/users')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  
  }, [])

  return (
    <div className="App">
     <h1>Mati puto</h1>
    </div>
  );
}

export default App;

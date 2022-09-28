import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [exercise, setExercise] = useState([])

  useEffect(() => {
    fetch('./db.json')
      .then(response => response.json())
      .then(data => setExercise(data))
  }, []);
  console.log(exercise);
  return (
    <div className="App">
      {
        exercise.map(item => (
          <div>
            <p>{item.name}</p>
            <img src={item.image} alt="..."/>
          </div>
        ))
      }
    </div>
  );
}

export default App;

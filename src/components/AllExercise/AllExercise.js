import { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './AllExercise.css';

const AllExercise = () => {
    const [allExercises, setAllExercise] = useState([]);

    useEffect(() => {
        fetch('./db.json')
        .then(response => response.json())
        .then(data => setAllExercise(data))
    }, []);

    return (
        <section className="all-exercise-section">
            <h1 className="heading">Select today's Exercise</h1>
            <div className="all-exercise">
                {
                    allExercises.map(exercise => (
                        <Exercise key={ exercise.id } exercise={ exercise } />
                    ))
                }
            </div>
        </section>
    );
};

export default AllExercise;
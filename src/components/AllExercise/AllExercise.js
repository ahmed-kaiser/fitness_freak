import Exercise from '../Exercise/Exercise';
import './AllExercise.css';

const AllExercise = ({ allExercises, addToAddedExercise}) => {
    return (
        <section className="all-exercise-section">
            <h1 className="heading">Select today's Exercise</h1>
            <div className="all-exercise">
                {
                    allExercises.map(exercise => (
                        <Exercise 
                            key={ exercise.id } 
                            exercise={ exercise } 
                            handleAddToList = { addToAddedExercise }
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default AllExercise;
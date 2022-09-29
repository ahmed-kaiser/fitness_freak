import './ExerciseDetail.css';

const ExerciseDetail = ({ breakTime, toDoExercise }) => {

    let totalExerciseTime = 0;
    for(const exercise of toDoExercise){
        totalExerciseTime += exercise.time * exercise.doActivity;
    }

    return (
        <div className="exercise-detail-section">
            <h3>Exercise Detail</h3>
            <div className="detail">
                <p className="title">Exercise time</p>
                <p className="time">{ totalExerciseTime } second</p>
            </div>
            <div className="detail">
                <p className="title">Break time</p>
                <p className="time">{ breakTime } second</p>
            </div>
            <div className="exercise-completed">
                <button className="completed-btn">Activity Completed</button>
            </div>
        </div>
    );
};

export default ExerciseDetail;
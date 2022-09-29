import './ExerciseDetail.css';

const ExerciseDetail = () => {
    return (
        <div className="exercise-detail-section">
            <h3>Exercise Detail</h3>
            <div className="detail">
                <p className="title">Exercise time</p>
                <p className="time">200 second</p>
            </div>
            <div className="detail">
                <p className="title">Break time</p>
                <p className="time">40 second</p>
            </div>
            <div className="exercise-completed">
                <button className="completed-btn">Activity Completed</button>
            </div>
        </div>
    );
};

export default ExerciseDetail;
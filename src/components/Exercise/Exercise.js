import './Exercise.css';

const Exercise = ({ exercise }) => {
    return (
        <div className="card">
            <img src={ exercise.image } alt="" />
            <div className="card-text">
                <h3>{ exercise.name }</h3>
                <p>{ exercise.details.slice(0, 100) }...</p>
                <p><b>Time: </b> { exercise.time }</p>
                <button className="card-btn">Add todo list</button>
            </div>
        </div>
    );
};

export default Exercise;
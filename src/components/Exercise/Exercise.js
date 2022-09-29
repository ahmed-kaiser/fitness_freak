import './Exercise.css';


const Button = ({ number, clickHandler }) => {
    return(
        <>
        {
            number?
            <button 
                className={ "card-btn active" }
                onClick = {clickHandler}
            >
                Added <span className="counter">{ number }</span>
            </button> 
            :
            <button
                className={ "card-btn" }
                onClick = {clickHandler}
            >
                Add to list
            </button>
        }
        </>
    );
}


const Exercise = ({ exercise, handleAddToList }) => {
    return (
        <div className="card">
            <img src={ exercise.image } alt="" />
            <div className="card-text">
                <h3>{ exercise.name }</h3>
                <p>{ exercise.details.slice(0, 100) }...</p>
                <p><b>Time: </b> { exercise.time }s</p>
                <Button 
                    number = { exercise.doActivity }
                    clickHandler = {() => handleAddToList(exercise)}
                />
            </div>
        </div>
    );
};

export default Exercise;
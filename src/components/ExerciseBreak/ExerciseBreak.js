import './ExerciseBreak.css'

const ExerciseBreak = () => {
    const time = [20, 30, 40, 50, 60];

    return (
        <div className="exercise-break-section">
            <h3>Add a break</h3>
            <div className="break-time">
                {
                    time.map(item => (
                        <p>{ item }s</p>
                    ))
                }        
            </div>
        </div>
    );
};

export default ExerciseBreak;
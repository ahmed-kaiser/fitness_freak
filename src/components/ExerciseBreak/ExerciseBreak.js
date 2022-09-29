import './ExerciseBreak.css'

const ExerciseBreak = ({ breakTime, clickHandler }) => {
    const time = [20, 30, 40, 50, 60];

    return (
        <div className="exercise-break-section">
            <h3>Add a break</h3>
            <div className="break-time">
                {
                    time.map(item => {
                        if(item === breakTime){
                            return <button className="break-btn active" key={item} onClick={() => clickHandler(item)}>{ item }</button>
                        }else{
                            return <button className="break-btn" key={item} onClick={() => clickHandler(item)}>{ item }</button>
                        }
                    })
                }        
            </div>
        </div>
    );
};

export default ExerciseBreak;
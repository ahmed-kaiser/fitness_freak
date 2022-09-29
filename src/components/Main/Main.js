import { useEffect, useState } from 'react';
import AllExercise from '../AllExercise/AllExercise';
import Profile from '../Profile/Profile';
import './Main.css';

const Main = () => {
    const [allExercises, setAllExercise] = useState([]);
    const [toDoExercise, setToDoExercise] = useState([]);
    const [breakTime, setBreakTime] = useState(0);

    const getDataFromLocalStorage = (name) => {
        let data = localStorage.getItem(name);
        return JSON.parse(data);
    }

    // store selected exercise info to local storage
    const addToLocalStorage = (exerciseId) => {
        let exerciseList = getDataFromLocalStorage('exerciseList');
        let exercise;
        if (exerciseList) {
            exercise = exerciseList[exerciseId];
            if(exercise){
                exerciseList[exerciseId] = exerciseList[exerciseId] + 1;
            }else{
                exerciseList[exerciseId] = 1;
            }
        }else{
            exerciseList = {};
            exerciseList[exerciseId] = 1;
        }

        localStorage.setItem('exerciseList', JSON.stringify(exerciseList));
    }

    // add selected exercise into toDoExercise list
    const addToAddedExercise = (exercise) => {
        let findExercise = toDoExercise.find(item => item.id === exercise.id);
        let updatedExerciseList;
        if(findExercise){
            updatedExerciseList = toDoExercise.map(item => {
                if(item.id === findExercise.id) {
                    item.doActivity += 1;
                }
                return item
            })
        }else{
            exercise.doActivity = 1;
            updatedExerciseList = [...toDoExercise, exercise];
        }
        setToDoExercise(updatedExerciseList);
        addToLocalStorage(exercise.id);
    }

    // update exercise break time
    const handleBreakTimeClick = (time) => {
        setBreakTime(time);
        localStorage.setItem('breakTime', time);
    }

    // load data from database
    useEffect(() => {
        fetch('./db.json')
        .then(response => response.json())
        .then(data => setAllExercise(data))
    }, []);

    // load data from local storage and update toDoExercise list
    useEffect(() => {
        const storedExerciseData = getDataFromLocalStorage('exerciseList');
        const storeBreakTime = getDataFromLocalStorage('breakTime');
        let exerciseList = []
        for(const id in storedExerciseData) {
            let exercise = allExercises.find(item => item.id === id);
            if (exercise) {
                exercise.doActivity = storedExerciseData[id];
                exerciseList.push(exercise);
            }
        }
        setToDoExercise(exerciseList);
        setBreakTime(storeBreakTime);
    }, [allExercises]);

    return (
        <main className="container">
            <div className="main-section">
                <AllExercise 
                    allExercises = { allExercises }
                    addToAddedExercise = { addToAddedExercise }
                />
                <Profile
                    toDoExercise = { toDoExercise }
                    breakTime = { breakTime }
                    handleBreakTimeClick = { handleBreakTimeClick }
                />
            </div>
        </main>
    );
};

export default Main;
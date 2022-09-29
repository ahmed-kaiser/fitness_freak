import ExerciseBreak from '../ExerciseBreak/ExerciseBreak';
import ExerciseDetail from '../ExerciseDetail/ExerciseDetail';
import PersonalDetail from '../PersonalDetail/PersonalDetail';
import './Profile.css';

const Profile = ({ toDoExercise, breakTime, handleBreakTimeClick, deleteHandler }) => {
    return (
        <section className="profile-section">
            <PersonalDetail/>
            <ExerciseBreak
                breakTime = { breakTime }
                clickHandler = { handleBreakTimeClick } 
            />
            <ExerciseDetail
                toDoExercise = { toDoExercise }
                breakTime = { breakTime }
                deleteHandler = { deleteHandler }
            />
        </section>
    );
};

export default Profile;
import ExerciseBreak from '../ExerciseBreak/ExerciseBreak';
import ExerciseDetail from '../ExerciseDetail/ExerciseDetail';
import PersonalDetail from '../PersonalDetail/PersonalDetail';
import './Profile.css';

const Profile = ({ toDoExercise, breakTime, handleBreakTimeClick }) => {
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
            />
        </section>
    );
};

export default Profile;
import ExerciseBreak from '../ExerciseBreak/ExerciseBreak';
import ExerciseDetail from '../ExerciseDetail/ExerciseDetail';
import PersonalDetail from '../PersonalDetail/PersonalDetail';
import './Profile.css';

const Profile = () => {
    return (
        <section className="profile-section">
            <PersonalDetail/>
            <ExerciseBreak/>
            <ExerciseDetail/>
        </section>
    );
};

export default Profile;
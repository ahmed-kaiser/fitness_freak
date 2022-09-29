import ExerciseBreak from '../ExerciseBreak/ExerciseBreak';
import PersonalDetail from '../PersonalDetail/PersonalDetail';
import './Profile.css';

const Profile = () => {
    return (
        <section className="profile-section">
            <PersonalDetail/>
            <ExerciseBreak/>
        </section>
    );
};

export default Profile;
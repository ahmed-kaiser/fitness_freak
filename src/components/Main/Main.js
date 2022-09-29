import AllExercise from '../AllExercise/AllExercise';
import Profile from '../Profile/Profile';
import './Main.css';

const Main = () => {
    return (
        <main className="container">
            <div className="main-section">
                <AllExercise/>
                <Profile/>
            </div>
        </main>
    );
};

export default Main;
import './PersonalDetail.css';


function InfoBlock({ infoOne, infoTwo, infoThree}) {
    return(
        <div>
            <span className="big-text">{ infoOne }</span>
            <p className="text-light">{ infoTwo }<small>({ infoThree })</small></p>
        </div>
    )
}

const PersonalDetail = () => {
    return (
        <div className="profile">
            <div className="profile-info-one">
                <img className="profile-img" src="./images/profile.jpg" alt=""/>
                <div className="profile-info-name-address">
                    <h4>Kaiser Ahmed</h4>
                    <small>Chittagong, Bangladesh</small>
                </div>
            </div>
            <div className="profile-info-two">
                <InfoBlock infoOne={ 62 } infoTwo={"Weight"} infoThree={"kg"}/>
                <InfoBlock infoOne={ 5.7 } infoTwo={"Height"} infoThree={"ft"}/>
                <InfoBlock infoOne={ 26 } infoTwo={"Age"} infoThree={"yrs"}/>
            </div>
        </div>
    );
};

export default PersonalDetail;
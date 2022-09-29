import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="container navbar">
                <img className="logo" src="./images/app_logo.png" alt="" />
                <div className="navbar_link">
                    <a className="navbar_link--item" href="/">Home</a>
                    <a className="navbar_link--item" href="/">Blog</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
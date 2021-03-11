import "./header.css";

const Header = () => {
    return(
        <div className="head">
            <div className="brandDiv">
            <ul className="brand">
                <a href="#"><li className="brand">Dimitri Nakos</li></a>
            </ul>
            </div>
            <div className="listDiv">
            <ul className="list">
                <a href="#"><li className="links">Portfolio</li></a>
                <a href="#"><li className="links">Resume</li></a>
                <a href="#"><li className="links">About</li></a>
            </ul>
            </div>
        </div>
    )
}

export default Header;
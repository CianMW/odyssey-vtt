import { Link } from "react-router-dom";

const LandingSideBar = ({wid, closeSideNav}) => {
    return (
     <div className={`${wid} sideNav d-flex align-items-center`}>
        <div className="sideNavButton" onClick={closeSideNav} >

        <i className="unstyled bi bi-list" ></i>
        </div >
        <Link  className="unstyled text-end" to="/">
        <h2 className="unstyled d-flex text-end">Home</h2>
        </Link>
        <a href="#project_section" className="unstyled" to="/">
        <h2 className="unstyled">Player Portal</h2>
        </a>
        <a href="#about_section" className="unstyled" to="/">
        <h2 className="unstyled">About</h2>
        </a>
        <Link  className="unstyled" to="/contact">
        <h2 className="unstyled">Contact</h2>
        </Link>
    </div>
     )
    };
export default LandingSideBar;
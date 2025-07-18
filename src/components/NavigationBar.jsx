import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

function NavigationBar() {

    const { currentUser, logoutClick, setcurrentDate } = useContext(UserContext);


    useEffect(() => {
        setcurrentDate(new Date().toLocaleDateString());
    }, [])
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    {
                        (currentUser && currentUser !== null) ?
                            <div className="navbar-nav">

                                <NavLink to="/databinding" className="nav-link">Data Binding</NavLink>
                                <NavLink to="/offer" className="nav-link">Offer Price</NavLink>
                                <NavLink to="/search" className="nav-link"> Products</NavLink>
                                <NavLink to="/uncontrolledform" className="nav-link"> UnControlledForm</NavLink>
                                <NavLink to="/controlledform" className="nav-link"> ControlledForm</NavLink>
                                <NavLink to="/formikform" className="nav-link"> Formik Form</NavLink>
                                <NavLink to="/products-list" className="nav-link"> Products-list</NavLink>
                                <NavLink to="/redux" className="nav-link"> Search(REdux)</NavLink>

                                <a className="nav-item nav-link disabled" href="#">Disabled

                                </a>
                                Welcome {currentUser.userFullName}
                                <a type="button" onClick={logoutClick} className="btn btn-primary">Log out</a>
                            </div>
                            : <NavLink to="/login" className="nav-link">Login</NavLink>
                    }

                </div>
            </nav>
        </>
    )
}

export default NavigationBar;
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate( '/login', {
            replace: true // Avoids the users to go back
        });
    }

    return (
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link
                    className="navbar-item"
                    to="/"
                >
                    Asociaciones
                </Link>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <NavLink
                        className={ ( { isActive } ) => `navbar-item ${ isActive ? 'active' : '' }` }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={ ( { isActive } ) => `navbar-item ${ isActive ? 'active' : '' }` }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={ ( { isActive } ) => `navbar-item ${ isActive ? 'active' : '' }` }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <span className="button is-primary">Jacob</span>
                            <NavLink
                                className="button is-light"
                                to="/login"
                                onClick={ onLogout }
                            >
                                Logout
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

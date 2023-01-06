import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

    const navigate = useNavigate();

    const onLogin = () => {
        navigate( '/', {
            replace: true // Avoids the users to go back
        } );
    }

    return (
        <div className="container">
            <h1>LoginPage</h1>
            <hr />

            <button
                className="button is-primary"
                onClick={ onLogin }
            >
                Login
            </button>
        </div>
    );
};

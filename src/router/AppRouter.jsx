import { Navigate, Route, Routes } from 'react-router-dom';

// Auth pages
import { LoginPage } from '../auth/pages/LoginPage';

// Heroes pages
import { DcPage } from '../heroes/pages/DcPage';
import { MarvelPage } from '../heroes/pages/MarvelPage';


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="marvel" element={ <MarvelPage /> } />
                <Route path="dc" element={ <DcPage /> } />

                <Route path="login" element={ <LoginPage /> } />

                <Route path="/" element={ <Navigate to="marvel" /> } />
            </Routes>
        </>
    );
};

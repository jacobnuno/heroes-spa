import { Route, Routes } from 'react-router-dom';

// Auth pages
import { LoginPage } from '../auth/pages';

// Heroes routes
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={ <LoginPage /> } />

                <Route path="/*" element={ <HeroesRoutes /> } />
            </Routes>
        </>
    );
};

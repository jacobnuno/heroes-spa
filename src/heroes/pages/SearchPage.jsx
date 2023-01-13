import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );
    const heroes = getHeroesByName( q );

    const { searchText, onInputChange, onResetForm } = useForm({ searchText: q });

    const onSearchSubmit = ( event ) => {
        event.preventDefault();

        navigate( `?q=${ searchText }` );
    }

    return (
        <>
            <h1>SearchPage</h1>
            <hr />

            <div className="columns">
                <div className="column is-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={ onSearchSubmit }>
                        <div className="field">
                            <div className="control">
                                <input
                                    type="text"
                                    placeholder="Search a hero"
                                    className="input"
                                    name="searchText"
                                    autoComplete="off"
                                    value={ searchText }
                                    onChange={ onInputChange }
                                />
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <button className="button is-link">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="column is-7">
                    <h4>Result</h4>
                    <hr />

                    {
                        ( q === '' )
                        ? <div className="notification is-link">Search a hero</div>
                        : ( heroes.length === 0 ) && <div className="notification is-danger">There's no results with <b>{ q }</b></div>
                    }

                    {
                        heroes.map( ( hero ) => {
                            return (
                                <HeroCard key={ hero.id } { ...hero } />
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

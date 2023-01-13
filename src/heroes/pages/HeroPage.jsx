import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {

    const { heroId } = useParams();
    const navigate = useNavigate();

    const hero = useMemo( () => getHeroById( heroId ), [ heroId ] );

    const onNavigateBack = () => {
        navigate( -1 );
    }

    if ( ! hero ) { // Redirect in case the hero doesn't exists
        return (
            <Navigate to="marvel" />
        );
    }

    return (
        <div className="columns">
            <div className="column is-4">
                <figure>
                    <img
                        src={ `/assets/heroes/${ heroId }.jpg` }
                        alt={ hero.superhero }
                        className="animate__animated animate__fadeInLeft"
                    />
                </figure>
            </div>
            <div className="column is-8">
                <h3 className="title is-4">{ hero.superhero }</h3>
                <ul className="list">
                    <li className="list-item">
                        <b>Alter ego: </b>
                        { hero.alter_ego }
                    </li>
                    <li className="list-item">
                        <b>Publisher: </b>
                        { hero.publisher }
                    </li>
                    <li className="list-item">
                        <b>First appearance: </b>
                        { hero.first_appearance }
                    </li>
                </ul>

                <hr />

                <h5 className="mt-3 mb-1 subtitle is-5">Characters</h5>
                <p>{ hero.characters }</p>

                <button
                    className="button is-link is-outlined mt-6"
                    onClick={ onNavigateBack }
                >
                    Go back
                </button>
            </div>
        </div>
    );
};

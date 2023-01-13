import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
    if ( alter_ego !== characters ) {
        return (
            <p>{ characters }</p>
        );
    }
};

export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImageUrl = `/assets/heroes/${ id }.jpg`;

    return (
        <div className="column is-4">
            <div className="card">
                <div className="columns">
                    <div className="column is-4">
                        <div className="card-image">
                            <figure>
                                <img src={ heroImageUrl } alt={ superhero } />
                            </figure>
                        </div>
                    </div>
                    <div className="column is-8">
                        <div className="card-content">
                            <p className="title is-4">{ superhero }</p>
                            <p className="subtitle is-6">{ alter_ego }</p>

                            <CharactersByHero alter_ego={ alter_ego } characters={ characters } />

                            <p className="">
                                <small>{ first_appearance }</small>
                            </p>

                            <Link to={ `/hero/${ id }` }>
                                More info...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

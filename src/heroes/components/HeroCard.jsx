export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_apprearance,
    characters
}) => {

    const heroImageUrl = `/assets/heroes/${ id }.jpg`;

    return (
        <div className="column is-4">
            <div className="card">
                <div className="columns">
                    <div className="column is-4">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={ heroImageUrl } alt={ superhero } />
                            </figure>
                        </div>
                    </div>
                    <div className="column is-8">
                        <div className="card-content">
                            <p class="title is-4">{ superhero }</p>
                            <p class="subtitle is-6">{ alter_ego }</p>

                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

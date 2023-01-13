import { useMemo } from 'react';

import { HeroCard } from './HeroCard';

import { getHeroesByPubliser } from '../helpers';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPubliser( publisher ), [ publisher ] );

    return (
        <>
            <h1>{ publisher }</h1>
            <hr />

            <div className="columns is-multiline is-mobile">
                {
                    heroes.map( ( hero ) => {
                        return (
                            <HeroCard
                                key={ hero.id }
                                { ...hero }
                            />
                        )
                    })
                }
            </div>
        </>
    );
};

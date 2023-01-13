import { heroes } from '../data/heroes';


export const getHeroesByName = ( name = '' ) => {

    const superheroName = name.toLocaleLowerCase().trim();

    if ( superheroName.length === 0 ) {
        return [];
    }

    return heroes.filter( ( hero ) => hero.superhero.toLocaleLowerCase().includes( superheroName) );
}

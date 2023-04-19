interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
}

(() => {

    function getMovieById( Id: number ): Object {
        console.log({ Id });

        return { }
    }

    function getMovieCastById( Id: number ): Object {
        console.log({ Id });

        return { };
    }

    function getActorBioById( ActorId: number ): Object {
        console.log({ ActorId });

        return { };
    }
    
    // Crear una película
    function createMovie( { title, description, rating, cast }: Movie ): Object {
        console.log({ title, description, rating, cast });

        return { title, description, rating, cast };
    }

    function validateName( firstName: string ): boolean {

        if ( firstName === 'fernando' ) return false;

        return true;        
    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        
        if ( isDead ) return 1500;

        if ( isSeparated ) return 2500;

        return isRetired ? 3000 : 4000;
    }


})();





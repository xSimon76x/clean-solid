
export abstract class Vehicule {
    
    abstract getNumberOfSeats(): number;

}

export class Tesla extends Vehicule {
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

    constructor( private numberOfSeats: number ) {
        super();
    }

}

export class Audi extends Vehicule {
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

    constructor( private numberOfSeats: number ) {
        super();
    }

}

export class Toyota extends Vehicule {
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

    constructor( private numberOfSeats: number ) {
        super();
    }

}

export class Honda extends Vehicule {
    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

    constructor( private numberOfSeats: number ) {
        super();
    }

}



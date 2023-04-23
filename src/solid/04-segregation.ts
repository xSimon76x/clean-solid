
//TODO Principio de Segregacion de Interfaz


interface Bird {
    eat(): void,
}

interface flyingBird {
    fly(): void,
}

interface RunningBird {
    run(): void,
}

interface SwimmerBird {
    swin(): void,
}



class Tucan implements Bird, flyingBird {
    fly(): void {}
    eat(): void {}
    run(): void {}

}

class Humminbird implements Bird, flyingBird {
    fly(): void {}
    eat(): void {}
    run(): void {}

}

class Ostrich implements Bird, RunningBird {
    eat(): void {}
    run(): void {}

}

class Pinguin implements Bird, SwimmerBird {

    fly(): void {}
    eat(): void {}
    run(): void {}
    swin(): void {}

}


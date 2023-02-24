import Director from '../Director'

export default abstract class Widget {
    director: Director
    constructor(director: Director) {
        this.director = director
    }

    abstract changed(): void
}
import Director from '../Director'

export default abstract class Widget {
    private director: Director
    constructor(director: Director) {
        this.director = director
    }

    changed(): void {

    }
}
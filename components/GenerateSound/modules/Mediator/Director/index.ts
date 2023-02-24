import AbstractWidget from '../Widgets'

export default abstract class Director {
    abstract createWidgets(): void
    abstract widgetChanged(widget: AbstractWidget): void
}
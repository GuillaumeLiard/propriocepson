import Widget from '../Widget'

export default abstract class Director {
    abstract createWidgets(): void
    abstract widgetChanged(widget: Widget): void
}
function connecting(nodesPiste: any[], mainGainNode: any) {
    const nodesPiste1Node = nodesPiste.map(node => node.getNode())
    const connectables = [
        ...nodesPiste1Node,
        mainGainNode,
    ]
    for (let i = 0; i < connectables.length - 1; i++) {
        const currentConnectable = connectables[i]
        const nextConnectable = connectables[i + 1]
        console.log(`connecting ${currentConnectable} to ${nextConnectable}`)
        currentConnectable.connect(nextConnectable)
    }
}

export default class Audio {
    mainGain: any
    context: AudioContext

    constructor(context: AudioContext, mainGain: any, nodesPiste1: any[], nodesPiste2: any[]) {
        this.context = context
        this.mainGain = mainGain

        const mainGainNode = mainGain.getNode()

        connecting(nodesPiste1, mainGainNode)
        connecting(nodesPiste2, mainGainNode)

        mainGainNode.connect(this.context.destination)
    }

    start() {
        this.mainGain.setVolumeToMax()
    }

    stop() {
        this.mainGain.setVolumeToZero()
    }
}
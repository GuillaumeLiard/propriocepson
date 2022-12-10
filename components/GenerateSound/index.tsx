import { start, stop } from './controller'
const VERSION = 4
export default function GenerateSound() {

    return (
        <section>
            <div className="flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
                    <div className="w-full mx-auto">
                        <h2>GenerateSound</h2>
                        <p>version : {VERSION}</p>
                        <div className="flex flex-wrap justify-start flex-grow mt-8 text-left md:mt-0">
                            <div className="w-full space-y-4 md:w-1/2">
                                <button onClick={start}>
                                    start
                                </button>
                            </div>
                            <div className="w-full space-y-4 md:w-1/2">
                                <button onClick={stop}>
                                    stop
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

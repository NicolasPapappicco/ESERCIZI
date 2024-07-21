import { useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

// initialValue avrà come valore 0 se non viene passato nessun parametro alla funzione
export function Counter({ initialValue = 0, incrementAmount = 1 }) {
    const [ counter, setCounter ] = useState(initialValue)

    function handleCounterIncrement() {
        // setCounter(counter + 1) Non aggiorna immediatamente il counter e quindi non si può lavorare sul valore modificato
        setCounter((c) => c + incrementAmount)
    }
    function handleCounterDecrement() {
        setCounter((c) => c - incrementAmount)
    }
    function handleCounterReset() {
        setCounter(initialValue)
    }

    return (
        <div>
            <CounterDisplay counter={counter}/>
            <button onClick={handleCounterIncrement}>Increment</button>
            <button onClick={handleCounterDecrement}>Decrement</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
    )
}
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";

export function App() {
    return (
        <div>
            <HelloWorld/>
            <hr />
            <Welcome name="John" age={19}/>
            <hr />
            <AlertClock/>
        </div>
    )
}
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MouseClicker } from "./MouseClicker";

export function App() {
    return (
        <div>
            <HelloWorld/>
            <hr />
            <Welcome name="John" age={19}/>
            <hr />
            <AlertClock/>
            <hr />
            <Counter initialValue={20} incrementAmount={2}/>
            <hr />
            <Clock/>
            <hr />
            <MouseClicker/>
        </div>
    )
}
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App() {
    return (
        <div>
            <HelloWorld/>
            <hr />
            <Welcome name="John" age={19}/>
        </div>
    )
}
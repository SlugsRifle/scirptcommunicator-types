import { Converter } from "./conv";
import { ScriptInf } from "./scriptInf";
import { ScriptSequence } from "./scriptSequence";
import { ScriptThread } from "./scriptThread";

declare global {
    const scriptInf: ScriptInf;
    const scriptThread: ScriptThread;
    const conv: Converter;
    const seq: ScriptSequence;
}

export { };
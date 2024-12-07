import { Converter } from "./conv";
import { ScriptInf } from "./scriptInf";

declare global {
    const scriptInf: ScriptInf;
    const conv: Converter;
}

export {};
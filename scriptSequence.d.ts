import { QScriptValue, QWidget } from "./ui";

export interface ScriptSequence {
    sendData(data: number[]): number[];
    showTextInputDialog(title: string, label: string, displayedText?: string): string;
    showMultiLineTextInputDialog(title: string, label: string, displayedText?: string): string;
    showGetItemDialog(title: string, label: string, displayedItems: string[], currentItemIndex?: number, editable?: boolean, parent?: QWidget): string;
    showGetIntDialog(title: string, label: string, intialValue: number, min: number, max: number, step: number, parent?: QWidget): number[];
    showGetDoubleDialog(title: string, label: string, intialValue: number, min: number, max: number, decimals: number, parent: QWidget): number[];
    messageBox(icon: string, title: string, text: string, parent?: QWidget): void;
    showYesNoDialog(icon: string, title: string, text: string, parent?: QWidget): boolean;
    showColorDialog(initialRed?: number, initialGreen?: number, initialBlue?: number, initialAlpha?: number, alphaIsEnabled?: boolean): number[];
    calculateCrc8(data: number[], polynomial: number, startValue?: number, finalXorValue?: number): number;
    calculateCrc16(data: number[], polynomial: number, startValue?: number, finalXorValue?: number): number;
    calculateCrc32(data: number[], polynomial: number, startValue?: number, finalXorValue?: number): number;
    getCurrentVersion(): string;
    setBlockTime(blockTime: number): void;
    getAllObjectPropertiesAndFunctions(object: QScriptValue): string[];
    appendTextToConsole(text: string, newLine?: boolean, bringToForeground?: boolean): void;
    setGlobalString(name: string, string: string): void;
    getGlobalString(name: string, removeValue?: boolean): string;
    setGlobalDataArray(name: string, data: number[]): void;
    getGlobalDataArray(name: string, removeValue?: boolean): number[];
    setGlobalUnsignedNumber(name: string, number: number): void;
    getGlobalUnsignedNumber(name: string, removeValue?: boolean): number[];
    setGlobalSignedNumber(name: string, number: number): void;
    getGlobalSignedNumber(name: string, removeValue?: boolean): number[];
}
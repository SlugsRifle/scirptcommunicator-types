import { Connectable } from "./connectable";
import { QScriptValue, QWidget, ScriptPlotWindow, ScriptTabWidget, ScriptToolBox, ScriptWidget, Widget } from "./ui";

export interface ScriptSound {
    fileName(): string;
    isFinished(): boolean;
    play(): void;
    stop(): void;
}

export interface ScriptTimer {
    start(): void;
    start(msec: number): void;
    stop(): void;
    setSingleShot(singleShot: boolean): void;
    isSingleShot(): boolean;
    setInterval(msec: number): void;
    interval(): number;
    isActive(): boolean;
    remainingTime(): number;
    setTimerType(type: string): boolean;
    timeoutSignal: Connectable<() => void>;
}

export interface ScriptXmlReader {
}
export interface ScriptXmlWriter {
}
export interface ScriptXmlElement {
}
export interface ScriptDomAttribute {
}
export interface QString {
}
export interface ScriptProcess {
}
export interface ConsoleSettings {
    showRecievedData: boolean;
    showSendData: boolean;
    maxChars: number;
    lockScrolling: boolean;
    font: string;
    fontSize: string;
    updateInterval: number;
    receiveColor: string;
}


export interface ScriptThread {
    showFileDialog(isSaveDialog: boolean, caption: string, dir: string, filter: string, parent?: Widget): string;
    showOpenFileNamesDialogSlot(caption: string, dir: string, filter: string, parent?: Widget): string[];
    showDirectoryDialog(caption: string, dir: string, parent?: QWidget): string;
    showTextInputDialog(title: string, label: string, displayedText?: string, parent?: Widget): string;
    showMultiLineTextInputDialog(title: string, label: string, displayedText?: string, parent?: Widget): string;
    showGetItemDialog(title: string, label: string, displayedItems: string[], currentItemIndex?: number, editable?: boolean, parent?: Widget): string;
    showGetIntDialog(title: string, label: string, intialValue: number, min: number, max: number, step: number, parent?: Widget): number[];
    showGetDoubleDialog(title: string, label: string, intialValue: number, min: number, max: number, decimals: number, parent?: Widget): number[];
    messageBox(icon: string, title: string, text: string, parent?: Widget): void;
    showYesNoDialog(icon: string, title: string, text: string, parent?: Widget): boolean;
    showColorDialog(initialRed?: number, initialGreen?: number, initialBlue?: number, initialAlpha?: number, alphaIsEnabled?: boolean, parent?: Widget): number[];
    checkFileExists(path: string, isRelativePath?: boolean): boolean;
    createAbsolutePath(fileName: string): string;
    getScriptFolder(): string;
    getFileSize(path: string, isRelativePath?: boolean): number;
    readFile(path: string, isRelativePath?: boolean, startPosition?: number, numberOfBytes?: number): string;
    readBinaryFile(path: string, isRelativePath?: boolean, startPosition?: number, numberOfBytes?: number): number[];
    writeFile(path: string, isRelativePath: boolean, content: string, replaceFile: boolean, startPosition?: number): boolean;
    writeBinaryFile(path: string, isRelativePath: boolean, content: number[], replaceFile: boolean, startPosition?: number): boolean;
    deleteFile(path: string, isRelativePath?: boolean): boolean;
    renameFile(path: string, newName: string): boolean;
    readDirectory(directory: string, isRelativePath?: boolean, recursive?: boolean, returnFiles?: boolean, returnDirectories?: boolean): string[];
    checkDirectoryExists(path: string, isRelativePath?: boolean): boolean;
    deleteDirectory(directory: string, isRelativePath?: boolean): boolean;
    deleteDirectoryRecursively(directory: string, isRelativePath?: boolean): boolean;
    createDirectory(path: string, isRelativePath?: boolean): boolean;
    renameDirectory(path: string, newName: string): boolean;
    zipDirectory(fileName: string, sourceDirName: string, comment?: string): boolean;
    zipFiles(fileName: string, fileList: string[], comment?: string): boolean;
    extractZipFile(fileName: string, destinationDirectory: string): boolean;
    createXmlReader(): ScriptXmlReader;
    createXmlWriter(): ScriptXmlWriter;
    readFile(fileName: string, isRelativePath?: boolean): number;
    parseString(xmlString: QString): boolean;
    elementsByTagName(name: string): ScriptXmlElement[];
    getRootElement(): ScriptXmlElement;
    elementName(): string;
    childElements(): ScriptXmlElement[];
    childTextElements(): string[];
    childCDataElements(): string[];
    childCommentElements(): string[];
    attributeValue(attrName: string): string;
    attributes(): ScriptDomAttribute[];
    value(): string;
    name(): string;
    writeBufferToFile(fileName: string, isRelativePath?: boolean): boolean;
    getInternalBuffer(): string;
    clearInternalBuffer(): string;
    setAutoFormatting(autoFormatting: boolean): void;
    autoFormatting(): boolean;
    setAutoFormattingIndent(spacesOrTabs: number): void;
    autoFormattingIndent(): number;
    writeStartDocument(version?: string): void;
    writeStartDocument(standalone: boolean, version?: string): void;
    writeEndDocument(): void;
    writeNamespace(namespaceUri: string, prefix?: string): void;
    writeDefaultNamespace(namespaceUri: string): void;
    writeStartElement(name: string, namespaceUri?: string): void;
    writeEmptyElement(name: string, namespaceUri?: string): void;
    writeTextElement(name: string, text: string, namespaceUri?: string): void;
    writeEndElement(): void;
    writeAttribute(name: string, value, namespaceUri?: string): void;
    writeCDATA(text: string): void;
    writeCharacters(text: string): void;
    writeComment(text: string): void;
    writeDTD(dtd: string): void;
    writeEntityReference(name: string): void;
    writeProcessingInstruction(target: string, data?: string): void;
    calculateCrc8(data: number[], polynomial: number, startValue?: number, finalXorValue?: number): number;
    calculateCrc16(data: number[], polynomial: number, startValue?: number, finalXorValue?: number): number;
    calculateCrc32(data: number[], polynomial: number, startValue?: number, finalXorValue?: number): number;
    setGlobalString(name: string, string: string): void;
    getGlobalString(name: string, removeValue?: boolean): string;
    globalStringChangedSignal: Connectable<(name: string, string: string) => void>;
    setGlobalDataArray(name: string, data: number[]): void;
    getGlobalDataArray(name: string, removeValue?: boolean): number[];
    globalDataArrayChangedSignal: Connectable<(name: string, data: number[]) => void>;
    setGlobalUnsignedNumber(name: string, number: number): void;
    getGlobalUnsignedNumber(name: string, removeValue?: boolean): number[];
    globalUnsignedChangedSignal: Connectable<(name: string, number: number) => void>;
    setGlobalSignedNumber(name: string, number: number): void;
    getGlobalSignedNumber(name: string, removeValue?: boolean): number[];
    setGlobalRealNumber(name: string, number: number): void;
    getGlobalRealNumber(name: string, removeValue?: boolean): number[];
    globalRealChangedSignal: Connectable<(name: string, number: number) => void>;
    createProcessDetached(program: string, arguments: string[], workingDirectory: string): boolean;
    createProcess(program: string, arguments: string[]): number;
    createProcessAsynchronous(program: string, arguments: string[], startWaitTime?: number, workingDirectory?: string): ScriptProcess;
    waitForFinishedProcess(process: ScriptProcess, waitTime?: number): boolean;
    getProcessExitCode(process: ScriptProcess): number;
    killProcess(process: ScriptProcess): void;
    terminateProcess(process: ScriptProcess): void;
    writeToProcessStdin(process: ScriptProcess, data: number[], waitTime?: number): boolean;
    processIsRunning(process: ScriptProcess): boolean;
    readAllStandardOutputFromProcess(process: ScriptProcess, isBlocking?: boolean, blockByte?: number, blockTime?: number): number[];
    readAllStandardErrorFromProcess(process: ScriptProcess, isBlocking?: boolean, blockByte?: number, blockTime?: number): number[];
    checkScriptCommunicatorVersion(minVersion: string): boolean;
    setScriptState(state: number, scriptTableEntryName: string): boolean;
    getScriptTableName(): string;
    appendTextToConsole(text: string, newLine?: boolean, bringToForeground?: boolean): void;
    sleep(timeMs: number): void;
    scriptShallExit(): boolean;
    createTimer(): ScriptTimer;
    createSoundObject(filename: QString, isRelativePath?: boolean): ScriptSound;
    createPlotWindow(): ScriptPlotWindow;
    loadScript(scriptPath: string, isRelativePath?: boolean, stopScriptOnError?: boolean): boolean;
    loadLibrary(path: string, isRelativePath?: boolean): boolean;
    loadUserInterfaceFile(path: string, isRelativePath?: boolean, showAfterLoading?: boolean): boolean;
    stopScript(): void;
    getLocalIpAdress(): string[];
    showReceivedDataInConsoles(show: boolean): boolean;
    showTransmitDataInConsoles(show: boolean): boolean;
    addMessageToLogAndConsoles(text: string, forceTimeStamp?: boolean): void;
    setScriptThreadPriority(priority: string): boolean;
    getCurrentVersion(): string;
    exitScriptCommunicator(exitCode: number): void;
    setBlockTime(blockTime: number): void;
    currentCpuArchitecture(): string;
    productType(): string;
    productVersion(): string;
    getScriptArguments(): string[];
    getScriptCommunicatorFolder(): string;
    getUserDocumentsFolder(): string;
    getUserHomeFolder(): string;
    getUserConfigFolder(): string;
    getUserGenericConfigFolder(): string;
    addTabsToMainWindow(tabWidget: ScriptTabWidget): boolean;
    addToolBoxPagesToMainWindow(scriptToolBox: ScriptToolBox): boolean;
    getAllObjectPropertiesAndFunctions(object: QScriptValue, printInScriptWindowConsole?: boolean): string[];
    mainWindowClearConsoleClickedSignal: Connectable<() => void>;
    mainWindowLockScrollingClickedSignal: Connectable<(isChecked: boolean) => void>;
    getMainWindowTitle(): string;
    setMainWindowTitle(newTitle: string): void;
    getTimestamp(): string;
    getConsoleSettings(): ConsoleSettings;
    setMainWindowAndTaskBarIcon(iconFile: string, isRelativePath: boolean): void;
    activateDarkMode(activate: boolean): void;
    setApplicationFontSize(fontSizePx: number): void;
}
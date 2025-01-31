import { Connectable } from "./connectable";

export interface PortInfo {
    portName: string;
    systemLocation: string;
    description: string;
    serialNumber: string;
    vendorIdentifier: number;
    productIdentifier: number;
}

export interface SerialPortSettings {
    name: string;
    buadRate: number;
    dataBits: number;
    parity: string;
    stopBits: string;
    flowControl: string;
    rts: boolean;
    dtr: boolean;
}

export interface SocketSettings {
    destinationPort: number;
    destinationIpAddress: string;
    ownPort: number;
    socketType: string;
    proxySettings: number;
    proxyIpAddress: string;
    proxyPort: number;
    proxyUserName: string;
    proxyPassword: string;
}

export interface AardvarkI2cSpiSettings {
    devicePort: number;
    deviceMode: number;
    device5VIsOn: boolean;
    i2cBaudrate: number;
    i2cSlaveAddress: number;
    i2cPullupsOn: boolean;
}

export interface AardvarkI2cSpiGpioConfig {
    isInput: boolean;
    withPullups: boolean;
    outValue: boolean;
}



export interface ScriptInf {
    availableSerialPorts(): string[];
    availableSerialPortsExt(): PortInfo[];
    sendDataArray(data: number[], repetitionCount?: number, pause?: number, addToMainWindowSendHistory?: boolean): boolean;
    sendString(string: string, repetitionCount?: number, pause?: number, addToMainWindowSendHistory?: boolean): boolean;
    sendCanMessage(type: number, canId: number, data: number[], repetitionCount?: number, pause?: number, addToMainWindowSendHistory?: boolean): boolean;
    isConnectedWithCan(): boolean;
    isConnectedWithI2c(): boolean;
    isConnected(): boolean;
    disconnect(): void;
    connectPcan(channel: number, baudrate: number, payloadBitrate?: number, connectTimeout?: number, busOffAutoReset?: boolean, powerSupply?: boolean, filterExtended?: boolean, filterFrom?: number, filterTo?: number): boolean;
    connectSocket(isTcp: boolean, isServer: boolean, ip: string, destinationPort: number, ownPort: number, connectTimeout?: number): boolean;
    connectSerialPort(name: string, baudRate?: number, connectTimeout?: number, dataBits?: number, parity?: number, stopBits?: number, flowControl?: string): boolean;
    setSerialPortPins(setRTS: boolean, setDTR: boolean): void;
    getSerialPortSignals(): number;
    sendReceivedDataToMainInterface(data: number[]): void;
    getMainInterfaceSerialPortSettings(): SerialPortSettings;
    getMainInterfaceSocketSettings(): SocketSettings;
    aardvarkI2cSpiDetectDevices(): string;
    aardvarkI2cSpiConnect(aardvarkI2cSpiSettings: AardvarkI2cSpiSettings, connectTimeout?: number): boolean;
    aardvarkI2cSpiReadAllInputs(): boolean[];
    aardvarkI2cSpiGetMainInterfaceSettings(): AardvarkI2cSpiSettings;
    aardvarkI2cSpiChangePinConfiguration(pinIndex: number, isInput: boolean, withPullups?: boolean): boolean;
    aardvarkI2cSpiSetOutput(pinIndex: number, high: boolean, updateSettingsDialog?: boolean): boolean;
    i2cMasterReadWrite(flags: number, slaveAddress: number, numberOfBytesToRead: number, dataToSend?: number[], repetitionCount?: number, pause?: number, addToMainWindowSendHistory?: boolean): boolean;
    i2cMasterFreeBus(): void;
    dataReceivedSignal: Connectable<(data: number[]) => void>;
    canMessagesReceivedSignal: Connectable<(types: number[], messageIds: number[], timestamps: number[], data: number[][]) => void>;
    i2cMasterDataReceivedSignal: Connectable<(flags: number, address: number, data: number[]) => void>;
    aardvarkI2cSpiInputStatesChangedSignal: Connectable<(states: boolean[]) => void>;
    sendDataFromMainInterfaceSignal: Connectable<(data: number[]) => void>;
    slaveDataSentSignal: Connectable<(data: number[]) => void>;
    createUdpSocket(): ScriptUdpSocket;
    createTcpServer(): ScriptTcpServer;
    createTcpClient(): ScriptTcpClient;
    createPcanInterface(): ScriptPcan;
    createSerialPort(): ScriptSerialPort;
    aardvarkI2cSpiCreateInterface(): ScriptAardvarkI2cSpi;
}

export interface ScriptUdpSocket {
    bind(port: number): boolean;
    isOpen(): boolean;
    close(): void;
    hasPendingDatagrams(): boolean;
    readDatagram(): number[];
    readAll(): number[];
    write(data: number[], hostAddress: string, hostPort: number): number;
    writeString(str: string, hostAddress: string, hostPort: number): number;
    enableMainInterfaceRouting(routingHostAddress: string, routingHostPort: number): void;
    disableMainInterfaceRouting(): void;
    canReadLine(): boolean;
    readLine(removeNewLine?: boolean, removeCarriageReturn?: boolean): string;
    readAllLines(removeNewLine?: boolean, removeCarriageReturn?: boolean): string[];
    readyReadSignal: Connectable<() => void>;
}

export interface ScriptTcpServer {
    listen(port: number): boolean;
    isListening(): boolean;
    setMaxPendingConnections(numConnections: number): void;
    maxPendingConnections(): number;
    close(): void;
    nextPendingConnection(): ScriptTcpClient;
    newConnectionSignal: Connectable<() => void>;
}

export interface ScriptTcpClient {
    connectToHost(hostAdress: string, port: number): void;
    isOpen(): boolean;
    close(): void;
    isReadable(): boolean;
    bytesAvailable(): number;
    readAll(): number[];
    write(data: number[]): number;
    writeString(str: string): number;
    getErrorString(): string;
    enableMainInterfaceRouting(): void;
    disableMainInterfaceRouting(): void;
    setProxy(proxyType?: string, proxyUserName?: string, proxyPassword?: string, proxyIpAddress?: string, proxyPort?: number): void;
    canReadLine(): boolean;
    readAllLines(removeNewLine?: boolean, removeCarriageReturn?: boolean): string[];
    readLine(removeNewLine?: boolean, removeCarriageReturn?: boolean): string;
    connectedSignal: Connectable<() => void>;
    disconnectedSignal: Connectable<() => void>;
    readyReadSignal: Connectable<() => void>;
    errorSignal: Connectable<(err: number) => void>;
}

export interface ScriptPcan {
    open(channel: number, baudrate: number, payloadBitrate: number, busOffAutoReset: boolean, powerSupply: boolean): boolean;
    close(): void;
    setFilter(filterExtended: boolean, filterFrom: number, filterTo: number): boolean;
    sendCanMessage(type: number, canld: number, data: number[]): boolean;
    isConnected(): boolean;
    getStatusString(): string;
    getCurrentStatus(): number;
    getCanParameter(parameter: number): number[];
    setCanParameter(parameter: number, data: number): boolean;
    canMessagesReceivedSignal: Connectable<(types: number[], messagelds: number[], timestamps: number[], data: number[][]) => void>;
}

export interface ScriptSerialPort {
    setPortName(name: string): void;
    portName(): string;
    setBaudRate(baudRate: number): boolean;
    baudRate(): number;
    setDataBits(dataBits: number): boolean;
    dataBits(): number;
    setParity(parityString: string): boolean;
    parity(): string;
    setStopBits(stopBitsString: string): boolean;
    stopBits(): string;
    setFlowControl(flowString: string): boolean;
    flowControl(): string;
    errorString(): string;
    open(): boolean;
    close(): void;
    setDTR(set: boolean): void;
    setRTS(set: boolean): void;
    isOpen(): boolean;
    bytesAvailable(): number;
    readAll(): number[];
    write(data: number[]): number;
    writeString(string: string): number;
    bytesToWrite(): number;
    waitForBytesWritten(msecs: number): boolean;
    enableMainInterfaceRouting(): void;
    disableMainInterfaceRouting(): void;
    canReadLine(): boolean;
    readLine(removeNewLine?: boolean, removeCarriageReturn?: boolean): string;
    readAllLines(removeNewLine?: boolean, removeCarriageReturn?: boolean): string[];
    readyReadSignal: Connectable<() => void>;
    getSerialPortSignals(): number;
}

export interface ScriptAardvarkI2cSpi {
    getInterfaceSettings(): AardvarkI2cSpiSettings;
    i2cMasterFreeBus(): void;
    detectDevices(): string;
    connectToDevice(aardvarkI2cSpiSettings: AardvarkI2cSpiSettings): boolean;
    disconnect(): void;
    i2cMasterReadWrite(flags: number, slaveAddress: number, numberOfBytesToRead: number, dataToSend?: number[]): boolean;
    i2cMasterReadLastReceivedData(): number[];
    spiMasterSendReceiveData(dataToSend: number[]): boolean;
    spiMasterReadLastReceivedData(): number[];
    setOutput(pinIndex: number, high: boolean): boolean;
    changePinConfiguration(pinIndex: number, isInput: boolean, withPullups?: boolean): boolean;
    readAllInputs(): boolean[];
    isConnected(): boolean;
    slaveSetResponse(response: number[]): boolean;
    aardvarkl2cSpilnputStatesChangedSigna: Connectable<(states: boolean[]) => void>;
    slaveDataSentSignal: Connectable<(data: number[]) => void>;
    slaveDataReceivedSignal: Connectable<(data: number[]) => void>;
}


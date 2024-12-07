interface PortInfo {
    portName: string;
    systemLocation: string;
    description: string;
    serialNumber: string;
    vendorIdentifier: number;
    productIdentifier: number;
}

interface SerialPortSetting {
    name: string;
    buadRate: number;
    dataBits: number;
    parity: string;
    stopBits: string;
    flowControl: string;
    rts: boolean;
    dtr: boolean;
}

interface SocketSetting {
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
    getMainInterfaceSerialPortSettings(): SerialPortSetting;
    getMainInterfaceSocketSettings(): SocketSetting;
}
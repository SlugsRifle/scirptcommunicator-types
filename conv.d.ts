export interface Converter {
    byteArrayToString(arr: number[]): string;
    byteArrayToUtf8String(arr: number[]): string;
    byteArrayToHexString(arr: number[]): string;
    stringToArray(str: string): number[];
    stringToUtf8Array(str: string): number[];
    byteArrayToUint16(arr: number[], littleEndian?: boolean): number;
    byteArrayToUint32(arr: number[], littleEndian?: boolean): number;
    byteArrayToUint64(arr: number[], littleEndian?: boolean): number;
    unsignedCharToSignedChar(num: number): number;
    byteArrayToInt16(arr: number[], littleEndian?: boolean): number;
    byteArrayToInt32(arr: number[], littleEndian?: boolean): number;
    byteArrayToInt64(arr: number[], littleEndian?: boolean): number;
    byteArrayToFloat32(arr: number[], littleEndian?: boolean): number;
    byteArrayToFloat64(arr: number[], littleEndian?: boolean): number;
    addStringToArray(arr: number[], str: string): number[];
    addUint16ToArray(arr: number[], num: number, littleEndian?: boolean);
    addUint32ToArray(arr: number[], num: number, littleEndian?: boolean);
    addUint64ToArray(arr: number[], num: number, littleEndian?: boolean);
    addInt16ToArray(arr: number[], num: number, littleEndian?: boolean);
    addInt32ToArray(arr: number[], num: number, littleEndian?: boolean);
    addInt64ToArray(arr: number[], num: number, littleEndian?: boolean);
    addFloat32ToArray(arr: number[], num: number, littleEndian?: boolean);
    addFloat64ToArray(arr: number[], num: number, littleEndian?: boolean);
}
export interface Connectable<T> {
    connect: (func: T) => void;
}
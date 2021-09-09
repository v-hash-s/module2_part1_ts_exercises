declare module 'stats' {

    type comparator<T> = (a: T, b: T) => number
    type stats = <T>(input: Array<T>, comparator: comparator<T>) => number;
    type elements = <T>(input: Array<T>, comparator: comparator<T>) => T | null;

    export const getMaxIndex: stats;
    export const getMaxElement: elements;
    export const getMinIndex: stats;
    export const getMinElement:elements;
    export const getMedianIndex: stats;
    export const getMedianElement: elements;
    export const getAverageValue: <T>(input: T[], value: (item: T) => number) => number | null;
}

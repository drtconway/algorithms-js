export declare type Comparator<T> = (lhs: T, rhs: T) => number;
export declare function defaultCompare(lhs: any, rhs: any): number;
export declare function numericCompare(lhs: number, rhs: number): number;
export declare function reverseNumericCompare(lhs: number, rhs: number): number;
export declare class Heap<T> {
    items: T[];
    compare: Comparator<T>;
    constructor(items: readonly T[], comparator?: Comparator<T>);
    size(): number;
    private heapify;
    front(): T;
    push(item: T): void;
    pop(): T;
    private upheap;
    private downheap;
}

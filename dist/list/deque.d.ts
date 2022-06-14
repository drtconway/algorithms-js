export declare class Deque<T> {
    private frontQ;
    private backQ;
    size(): number;
    push_front(x: T): void;
    push_back(x: T): void;
    pop_front(): T;
    pop_back(): T;
    [Symbol.iterator](): Iterator<T>;
}

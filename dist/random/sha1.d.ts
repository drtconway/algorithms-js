import { RandomSource } from "./random";
export declare class Sha1Source implements RandomSource {
    private hex;
    private bytes;
    constructor(seed: any);
    byte(): number;
    private refill;
}

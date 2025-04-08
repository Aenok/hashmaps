import { Node, LinkedList } from './ll.js';

class HashMap {
    constructor() {
        this.buckets = []
        this.capacity = 16;
        this.load_factor = 0.85;
        this.growBuckets(this.capacity);
    }

    growBuckets(num) {
        for(let i = 0; i < num; i++) {
            this.buckets.push(new LinkedList);
        }
    }

    hash(key) {
        let hashCode = 0;
        const primeNum = 31;
        for(let i = 0; i < key.length; i++) {
            hashCode = (primeNum * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }
}

let test = new HashMap();

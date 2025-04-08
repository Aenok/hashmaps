
import { Node } from './node.js';
import { LinkedList} from './linkedLists.js';

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

    set(key, value) {
        let bucketIndex = this.hash(key);
        this.buckets[bucketIndex].append(key, value);
    }

    get(key) {
        let bucketIndex = this.hash(key);
        let llIndex = this.buckets[bucketIndex].findIndex(key);
        if(llIndex != -1) {
            return this.buckets[bucketIndex].lis[llIndex].value;
        } else {
            return null;
        }
    }


}

// let newNode = new Node('apple', 'red');
// console.log(newNode.toString());
let test = new HashMap();
// console.log(test);
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
// test.buckets[11].toString();
console.log(test.get('hatt'));
// console.log(test.buckets);

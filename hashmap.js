
import { LinkedList} from './linkedLists.js';

class HashMap {
    constructor() {
        this._buckets = []
        this.capacity = 16;
        this.load_factor = 0.75;
        this.growBuckets(this.capacity);
    }

    growBuckets(num) {
        for(let i = 0; i < num; i++) {
            this._buckets.push(new LinkedList);
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
        if(this.has(key)) {
            let llIndex = this._buckets[bucketIndex].findIndex(key);
            this._buckets[bucketIndex].retAt(llIndex).value = value;
        } else {
            this._buckets[bucketIndex].append(key, value);
        }

        if(this.length() > this.capacity * this.load_factor) {
            this.growBuckets(this.capacity);
            this.capacity *= 2;
        }
    }

    get(key) {
        let bucketIndex = this.hash(key);
        let llIndex = this._buckets[bucketIndex].findIndex(key);
        if(llIndex != -1) {
            return this._buckets[bucketIndex].lis[llIndex].value;
        } else {
            return null;
        }
    }

    has(key) {
        let bucketIndex = this.hash(key);
        return this._buckets[bucketIndex].contains(key);
    }

    remove(key) {
        let bucketIndex = this.hash(key);
        if(this._buckets[bucketIndex].contains(key)) {
            this._buckets[bucketIndex].removeAt(this._buckets[bucketIndex].findIndex(key));
            return true;
        } else {
            return false;
        }
    }

    length() {
        let count = 0;
        for(let i = 0; i < this.capacity; i++) {
            count += this._buckets[i].size();
        }
        return count;
    }

    clear() {
        this._buckets = [];
        this.capacity = 16;
        this.growBuckets(this.capacity);        
    }

    keys() {
        let retVal = []
        for(let i = 0; i < this._buckets.length; i++) {
            for(let j = 0; j < this._buckets[i].size(); j++) {
                retVal.push(this._buckets[i].lis[j].key);            }
        }
        return retVal;
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
test.set('lioness', 'platinum');
console.log(test.keys());
// console.log(test);
// test.clear();
// console.log(test);

// test.buckets[11].toString();
// console.log(test.get('lion'));
// console.log(test.length());
// console.log(test.remove('lion'));
// console.log(test.length());

// test.set('lion', 'silver');
// console.log(test.get('lion'));
// console.log(test.buckets);

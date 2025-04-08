export class Node {

    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.nextNode = null;
    }

    toString() {

        return this.key + " " + this.value;
    }
}
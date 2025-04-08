import { Node } from './node.js'

export class LinkedList {
    constructor() {
        this.lis = [];
        this.head = null;
        this.tail = null;
    }
    append(key, value) {
        let newNode = new Node(key, value);
        if(this.size() == 0) {
            this.head = newNode;
        } else {
            this.lis[this.size()-1].nextNode = newNode;
        }
        this.lis.push(newNode);
        this.tail = newNode;
    }

    prepend(key, value) {
        let newNode = new Node(key, value);
        if(this.size() == 0) {
            this.tail == newNode;
        } else {
            newNode.nextNode = this.lis[0];
        }
        this.lis.unshift(newNode);
        this.head = newNode;
    }

     size() {
        return this.lis.length;
     }

     retHead() {
        return this.head;
     }

     retTail() {
        return this.tail;
     }

     retAt(index) {
        return this.lis[index];
     }

     pop() {
        if(this.size() > 1) {
            this.lis[this.size()-2].nextNode = null;
        }
        this.lis.pop();
     }

     contains(key) {
        for(let i = 0; i < this.size(); i++) {
            if(this.lis[i].key == key) {
                return true;
            }
        }
        return false;
     }

     findIndex(key) {
        for(let i = 0; i < this.size(); i++) {
            if(this.lis[i].key == key) {
                return i;
            }
        }
        return -1;
     }

     toString() {
        if(this.head == null || this.tail == null) {
            console.log(`Empty List`);
        } else {
            let str = `[[${this.lis[0].key}, ${this.lis[0].value})]`;;
            for(let i = 1; i < this.size(); i++) {
                str += `, [${this.lis[i].key}, ${this.lis[i].value})]`;
            }
            str += `]`;
            console.log(str);
        }
    }

    insertAt(key, value, index) {
        if(index >= this.size()) {
            this.append(key, value);
        } else if(index == 0) {
            this.prepend(key, value);            
        } else {
            let newNode = new Node(key, value);
            let left = this.lis.slice(0, index);
            let right = this.lis.slice (index, this.size());
            left[left.length-1].nextNode = newNode;
            newNode.nextNode = right[0];
            left.push(newNode);
            this.lis = left.concat(right);
        }
    }

    removateAt(index) {
        if( index >= this.size()) {
            this.pop();
        } else if(index == 0) {
            this.lis.shift();
        } else {
            let left = this.lis.slice(0, index);
            let right = this.lis.slice(index + 1, this.size());
            left[left.length-1].nextNode = right[0];
            this.lis = left.concat(right);
        }
    }
}
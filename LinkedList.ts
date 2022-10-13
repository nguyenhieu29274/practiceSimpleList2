import {Node} from "./node";


export class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;

    size: number


    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirtNode(data: T): void {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;

        if (!this.tail) {
            this.tail = node
        }
        this.size++;
    }

    insertLastNode(data: T): void {
        if (!this.head) {
            this.insertFirtNode(data);
        } else {
            let node = new Node(data);
            this.tail.next = node;
            node = this.tail;
            this.size++;

        }
    }
    getsize():number {
        return this.size;
    }

    readList():T[] {
        let litsData = [];
        let currentNode = this.head;

        while (currentNode !==null) {
            litsData.push(currentNode.readData());
            currentNode=currentNode.next
        }

        return litsData;

    }
}
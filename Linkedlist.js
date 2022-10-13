"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var node_1 = require("./node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.insertFirtNode = function (data) {
        var node = new node_1.Node(data);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkedList.prototype.insertLastNode = function (data) {
        if (!this.head) {
            this.insertFirtNode(data);
        }
        else {
            var node = new node_1.Node(data);
            this.tail.next = node;
            node = this.tail;
            this.size++;
        }
    };
    LinkedList.prototype.getsize = function () {
        return this.size;
    };
    LinkedList.prototype.readList = function () {
        var litsData = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            litsData.push(currentNode.readData());
            currentNode = currentNode.next;
        }
        return litsData;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;

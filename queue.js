// Queue
function Queue() {
    var item = [];
    // enqueue
    this.enqueue = (e) => {
        item.push(e);
    };

    // dequeue
    this.queue = () => {
        return item.shift();
    };

    // head
    this.getHead = () => {
        return item[0];
    };

    // tail
    this.getTail = () => {
        return item[item.length - 1];
    };

    // isEmpty
    this.isEmpty = () => {
        return item.length == 0;
    };

    // size
    this.size = () => {
        return item.length;
    };

    // clear
    this.clear = () => {
        item = [];
    };

    // print
    this.print = () => {
        console.log(item.toString());
    };
}

var q = new Queue();
q.enqueue(1);
q.enqueue('a');
q.enqueue(2);
q.enqueue('b');
q.enqueue(3);
q.enqueue('c');
q.print();

console.log(q.isEmpty());
console.log(q.size());
console.log(q.getHead());
console.log(q.getTail());

q.clear();
q.print();

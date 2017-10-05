function Stack() {
    var data = [];
    this.Push = (d) => {
        let index = data.length;
        data[index] = d;
    };
    this.Pop = () => {
        let last = data[data.length - 1];
        data.pop();
        return last;
    };
}

var stack = new Stack();
console.log("Push 1");
stack.Push(1);
console.log("Push 2");
stack.Push(2);
console.log("Push 3");
stack.Push(3);

console.log("Pop  " + stack.Pop());
console.log("Pop  " + stack.Pop());
console.log("Pop  " + stack.Pop());

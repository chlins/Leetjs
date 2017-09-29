function LinkedList() {
    // define Node
    var Node = function(element) {
        this.element = element;
        this.next = null;
    }
    var length = 0;
    var head = null;

    //append
    this.append = (element) => {
        var node = new Node(element);
        var current;
        if (!head) {
            head = node;
        } else {
            current = head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
        return true;
    };

    //insert
    this.insert = (position,element) => {
        if (position >= 0 && position <= length) {
            var node = new Node(element);
            var current = head;
            var index = 0;
            var previous;
            if (position === 0) {
                node.next = current;
                head = node;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;   
            }
            length++;
            return true;
        } else {
            return false;
        }
    };

    //remove at someone position
    this.removeAt = (position) => {
        if (position > -1 && position < length) {
            var current = head;
            var previous;
            var index = 0;
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };

    //remove one element
    this.remove = (element) => {
        var current = head;
        var previous;
        if (element === current.element) {
            head = current.next;
            length--;
            return true;
        }
        previous = current;
        current = current.next;
        while (current) {
            if (element === current.element) {
                previous.next = current.next;
                length--;
                return true;
            } else {
                previous = current;
                current = current.next;
            }
        }
        return false;
    }

    //remove from end
    this.remove = () => {
        if (length < 1) {
            return false;
        }
        var current = head;
        var previous;

        if (length == 1) {
            head = null;
            length--;
            return current.element;
        }

        while (current.next !== null) {
            previous = current;
            current = current.next;
        }

        previous.next = null;
        length--;
        return current.element;
    };

    //indexOf
    this.indexOf = (element) => {
        var current = head;
        var index = 0;

        while (current) {
            if (current.element === element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return false;
    };

    //isEmpty
    this.isEmpty = () => {
        return length === 0;
    };

    //size
    this.size = () => {
        return length;
    };

    //toString
    this.toString = () => {
        var current = head;
        var string = '';
        while (current) {
            string += current.element;
            current = current.next;
        }
        return string;
    };

    //head
    this.getHead = () => {
        return head;
    }

    //end
    this.getTail = () => {
        var current = head;
        while (current.next) {
            current = current.next
        }
        return current;
    };

}



var linkedList = new LinkedList();
console.log("(1) Try append ...... ");
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
console.log("Show result ......");
console.log(linkedList.toString());

console.log("----------------------------------");

console.log("(2) Try insert ...... ");
linkedList.insert(5,6);
console.log("Show result ......");
console.log(linkedList.toString());

console.log("----------------------------------");

console.log("(3) Try removeAt ...... ");
linkedList.removeAt(5);
console.log("Show result ......");
console.log(linkedList.toString());

console.log("----------------------------------");

console.log("(4) Try remove element ...... ");
linkedList.remove(5);
console.log("Show result ......");
console.log(linkedList.toString());

console.log("----------------------------------");

console.log("(4) Try remove tail ...... ");
linkedList.remove();
console.log("Show result ......");
console.log(linkedList.toString());

console.log("----------------------------------");

console.log("(5) Try indexOf ...... ");
console.log("Index is ......" + linkedList.indexOf(3));

console.log("----------------------------------");

console.log("(6) Try size ...... ");
console.log("Size is ......" + linkedList.size());

console.log("----------------------------------");

console.log("(7) Try getHead ...... ");
console.log("Head is ......" + JSON.stringify(linkedList.getHead()));

console.log("----------------------------------");

console.log("(8) Try getTail ...... ");
console.log("Tail is ......" + JSON.stringify(linkedList.getTail()));





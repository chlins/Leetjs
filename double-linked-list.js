function doubleLinkedList() {
    var length = 0;
    var head = null;
    var tail = null;
    var Node = function(e){
        this.element = e;
        this.next = null;
        this.previous = null;
    };


    this.insertAt = (position,e) => {
        if (position >= 0 && position <= length) {
            var node = new Node(e);
            var current = head;
            var previous;
            var index = 0;
            if (position == 0) {
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    current = head;
                    node.next = current;
                    current.previous = head;
                    head = node;
                }
            } else if (position == length) {
                current = tail;
                current.next = node;
                node.previous = current;
                tail = node;
            } else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = node;
                node.previous = previous;
                node.next = current;
                current.previous = node;
            }
            length++;
            return true;
        } else {
            return null;
        }
    };

    this.removeAt = (position) => {
        if (position >= 0 && position < length) {
            var current = head;
            var previous;
            var index = 0;
            if (position == 0) {
                head = current.next;
                if (length == 1) {
                    tail = null;
                } else {
                    head.previous = null;
                }
            } else if (position == length - 1) {
                current = tail;
                tail = current.previous;
                tail.next = null;
            } else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };

    this.indexOf = (e) => {
        var current = head;
        var index = 0;
        while (current) {
            if (current.element == e) {
                return index;
            }
            current = current.next;
            index++;
            if (length <= index) {
                return null;
            }
        }
    };

    this.isEmpty = () => {
        return length == 0;
    };

    this.getLength = () => {
        return length;
    };

    this.printOrder = () => {
        var current = head;
        while (current) {
            console.log(current.element);
            current = current.next;
        }
    };

    this.printReversed = () => {
        var current = tail;
        while (current) {
            console.log(current.element);
            current = current.previous;
        }
    };

    this.getHead = () => {
        return head;
    };

    this.getTail = () => {
        return tail;
    };
}


var link = new doubleLinkedList();
link.insertAt(0,'a');
link.insertAt(1,'b');
link.insertAt(2,'c');
link.insertAt(3,'d');
link.insertAt(4,'e');
link.removeAt(4);

console.log("Link indexOf-------->",link.indexOf('a'));

console.log("Link length--------->",link.getLength());

console.log("Link print order---->",link.printOrder());

console.log("Link print reverse-->",link.printReversed());

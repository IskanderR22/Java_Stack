


// Algos 08/02/2021 Day 1 Singly Linked Lists

let head = new SLNode(1); // Setting the start of the train to the value of 1, the "head" of the list
let runner_temp = head; // Setting a temp variable to change the .next value from the head

for (let i of [7,3,5,2]) { // Looping through a list of values
    let new_node = new SLNode(i); // Setting a new variable to add SLnodes

    runner_temp.next = new_node; // Linking the new SLnodes to the head of the train, 1, 7, 3, 5, 2

    runner_temp = new_node; // Updating the current value of the runner_temp variable so when we use
                            // .next we link it to the next created node
}

console.log(head.val); // The value at this spot is 1 
console.log(head.next.val); // The value at this spot is 7
console.log(head.next.next.next.val); // The value at this spot is 5


// Algos 08/03/2021 Day 2 of Singly Linked Lists, adding the end of a SLL 

    class SLNode{
        constructor(value){
            this.value = value
            this.next = null
        }
    }

    class SLL{
        constructor(){
            this.head = null;
        }

    /**
     * Prints all the nodes in the list to the console.
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {SinglyLinkedList} This list.
     */
    printValues() {
        if(this.head == null){ // If the SLL is empty 
            console.log("LIST EMPTY")
            return
        }
        // IF THE LIST IS NOT EMPTY
        var runner = this.head 
        while(runner != null){
            console.log(runner.value)
            runner = runner.next
        }
    }
    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBack(data){
        var newNode = new SLNode(data); // Setting our new node data to be added at the end of our SLL
        
        // Edge cases
        // 1. SLL IS EMPTY
        if(this.head == null){ // If our head is empty
            this.head =newNode;
            return this;
        }
        if(this.head.next == null){ // If the node next to our head is empty add our variable newNode to it
            this.head.next = newNode;
            return this;
        }

        // Non-Edge cases
        // 2. SLL IS NOT EMPTY
        var runner = this.head; // Create a runner to go through our SLL
        while(runner.next != null){ // Go through the SLL until the runner hits null
            runner = runner.next;
        }
        // Now runner.next is ready, we can add our variable newNode to the SLL
        runner.next = newNode
        return this; 
    }
    
    /**
     * Adds each item of the given array to the back of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    seedFromArr(arr) {
        for(var i = 0; i < arr.length; i++ ){ // Iterate through the array 
            this.insertAtBack(arr[i]); // Call our previous function to add the values at arr[i] to the end of the SLL
        }
        return this;

    }


// Algos 08/04/2021 Day 3 Singly Linked Lists

    /**
     * Creates a new node with the given data and inserts that node at the front
     * of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data for the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtFront(data) {
        // Edge case
        if( this.head = null){ // If the SLL is empty
            this.head = new SLNode(data); // Create a Head
        }
        else{
            var new_node = new SLNode(data); // Creating a new node
            new_node.next = this.head(); // Connecting the new node to the current Head
    
            this.head = new_node; // Assigning the value of the new Head to the new node we made
        }
    }

    /**
     * Removes the first node of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data from the removed node.
     */
    removeAtFront(){
        if(this.head != null){
            var temp = this.head; // Setting temp to the original Head
            this.head =this.head.next; // Setting the Head to the next node in the SLL

            temp.next = null; // Setting the original Head to null so it will be deleted
        }
    }
    
    // EXTRA
    /**
     * Calculates the average of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {number|NaN} The average of the node's data.
     */
    average() {
        var runner = this.head; // Create a runner
        var sum = 0; // Create a sum variable 
        var counter = 0; // Create a counter variable 
        while( runner != null){ // While the current value of runner is not null
            sum += runner.value(); // Add the value to the sum
            counter++; // Increase the counter by one
            runner = runner.next; // Moves the runner to the next node
        }
        let average = sum/counter; // The sum divided by then number of nodes 
        return average; // Return the average
    }

    // Algos 08/05/2021 Day 4 Singly Linked Lists

    //
    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} val The data to search for in the nodes of this list.
     * @returns {boolean}
     */
    contains(val){
        // Run through the whole list and check to see if the val is in the list return true, else return false
        var runner = this.head;

        while(runner != null){ // Pushing the runner to the null of the list, after the last node
            if(runner.value == val){
            return true;
            }
            runner = runner.next; 
        }
        return false;
    }

    /**
     * Removes the last node of this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data from the node that was removed.
     */
    removeBack(){
        var runner = this.head;

        // Edge case if nothing is in the list or the head is the only node in the list
        if(runner == null || runner.next == null){
            return null;
        }
        
        while(runner.next.next != null){ // This checks the value after the last node
            runner = runner.next;
        }
        runner.next = null;
    }
    
    // EXTRA
    /**
     * Determines whether or not the given search value exists in this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} val The data to search for in the nodes of this list.
     * @param {?node} current The current node during the traversal of this list
     *    or null when the end of the list has been reached.
     * @returns {boolean}
     */
    containsRecursive(val, current = this.head) {

        // Base Case
        if( current == null){ // If the current is equal to null we return false, val was not in thge list
            return false;
        }
        if( current.value == val){ // If the current value is equal to the val, return true
            return true;
        }

        return containsRecursive(val, current.next); // Passing the value and moving the current to the next node
    }
    
    
    /**
     * Recursively finds the maximum integer data of the nodes in this list.
     * - Time: (?).
     * - Space: (?).
     * @param {Node} runner The start or current node during traversal, or null
     *    when the end of the list is reached.
     * @param {Node} maxNode Keeps track of the node that contains the current
     *    max integer as it's data.
     * @returns {?number} The max int or null if none.
     */

    // Base Case
    recursiveMax(runner = this.head, maxNode = this.head) {
        if( runner == null){ // When the runner is equal to null
            return maxNode; // Return the maxNode
        }

        if( runner.value > maxNode.value){  // If the runner value is greater than the current maxNode value 
            maxNode = runner; // Set the maxNode to the runner 
        }
        return recursiveMax( runner.next, maxNode); // Recursive call, moving the runner and maxNode value
    }

    // Algos 08/06/2021 Day 4 Singly Linked Lists

    /*
     * Retrieves the data of the second to last node in this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data of the second to last node or null if there is no
     *    second to last node.
     */
    secondToLast() {
        if(this.head == null || this.head.next == null) { // If the head or the next node is null we know there is only one node in the list
            return null; // Return null
        }
        else {
            runner = this.head; // Set the runner to the head
            while(runner.next.next != null) { // Checking the value of the node after the next node until we hit null
            runner = runner.next; // Moving the runner through the list
            }
            return runner.value; // Once we setup the runner in the second to last position, return it's value
        } 
    }

    /*
     * Removes the node that has the matching given val as it's data.
     * - Time: (?).
     * - Space: (?).
     * @param {any} val The value to compare to the node's data to find the
     *    node to be removed.
     * @returns {boolean} Indicates if a node was removed or not.
     */
    removeVal(val) { // Looking to remove a certain value in the list
        if(head.value == val) { // If the value is at the head then set the head equal to null and return true
            this.head = null;
            return true;
        }
        runner = this.head; // Setting the runner at the start of the SLL
        runner_previous = this.head; // Setting a runner to hold the previous nodes position
        while(runner != null) { // While the runner is not null
            if(runner.value == val) { // If the runners value is the value we are looking for
            runner_previous.next = runner.next; // Connect the previous node to the node next to the runner
            runner.next = null; // Disconnect the current node from the list
            return true; // Return true
        }
        runner_previous = runner // Moving the previous runner to the current runners node
        runner = runner.next; // Moving the runner through the SLL
        }
        return false; // If we do not find the value in the SLL return false
    }


    //  FRIDAY EXTRA
    /**
     * Retrieves the data of the kth to last node in this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data of the kth to last node or null if there is no
     *    kth to last node.
     */
    kthToLast(k) {
        //Check if the linked list is empty 
        if(this.head == null){
            console.log("LIST EMPTY")
            return false;
        }

          //Check if the next node after head is null, and if k = 1 return head value
        if(this.head.next == null && k == 1){
            return this.head.value; 
        }

          //Start count at one to include head
        let count = 1; 
        let walker = this.head; // walker will traverse linked list after runner

          // IF THE LIST IS NOT EMPTY
        var runner = this.head
        while(runner.next != null){
            runner = runner.next; 
              count++; //This will count the amount of nodes in the linked list
        }

          //If K entered is bigger than amount of nodes in linked list return null
          //K would be out of range if it is bigger than count
        if(k > count){
            return null; 
        }
          //Use for loop to loop to the kth to last position
        for(let i = 0; i < count - k; i++){
            walker = walker.next; 
        }
          return walker.value; //return kth to last value
    }

}

    //***************************************************** *//

     // Algos 08/09/2021 Day 5 Last in First out(LIFO) - Stacks
     // Think about a stack of papers 

    // MON
// LAST IN FIRST OUT
// LIFO - STACKS
class Stack {
        constructor(items = []) {
        this.items = items;
    }
    // Time: O(1)
    // Space: O(1)
    push(item) {
        this.items.push(item);

    }

    // Time: O(1)
    // Space: O(1)
    // Returns undefined if empty
    pop() {
        return this.items.pop();

    }

    // aka top, returns undefined if empty
    // Time: O(1)
    // Space: O(1)
    peek() {
        return this.items[this.items.length - 1];


    }

    // Time: O(1)
    // Space: O(1)
    isEmpty() {
        if(this.items.length > 0){
            return false;
        }
        else {
            return true;
        }

    }

    // Time: O(1)
    // Space: O(1)
    size() {
        return this.items.length;

    }

    // Time: O(n) linear
    // Space: O(n)
    print() {
        console.log(this.items);

    }
}

class SLNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SLStack {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    isEmpty() {
        if(this.head == null){ // If the top of the list is equal to null then return true the list is empty
            return true;
        }
        else{
            return false;
        }
        
    }

    // Adds a new node with the given value in front of the head node.
    push(value) {
        let new_node = new SLNode(value); // Creating a new node
        new_node.next = this.head; // Creating the link from the head to the new node
        this.head = new_node; // Setting the head to the new node
        this.length++; // Incrementing the length 
    }

    // Removes the head node
    // return the popped value -- important!
    pop() {
        let new_node = this.head; // Setting a varible to the head of the list
        this.head = new_node.next; // Moving the head to the next node 
        new_node.next = null; // Removing the node from the SLS
        this.length--;
        return new_node; // Returning the value that was popped

    }

    size() {
        return this.length; // Returning the length

    }

    peek() {
        return this.head.value; // Returning the value at the top of the stack

    }
    printPretty() {
        let runner = this.head; // Setting a runner to the head of the stack
        let new_string = "" // Creating an empty string
        while(runner != null){ // While the runner is not null
            new_string = new_string + " " + runner.value; // Adding the values to the empty string variable
            runner = runner.next; // Moving the runner through the stack
        }
        return new_string; // Returning the string
    }

    ////  EXTRA  /////
    // Reverses stack with the order of the nodes reversed
    // For this exercise, do NOT try to re-point all the pointers
    // use an extra stack as storage and utilize the pop and push 
    // methods. Hint: you can re-point the head.
    reverse() {
        let new_stack = new SLStack(); // Creating a new SL Stack with the class above
        while(!this.isEmpty()){ // While the first stack is not empty 
            new_stack.push(this.pop()); // We push the value to the new stack and pop the value of the original stack, using the pop() function
        }
        this.head = new_stack.peek(); // This returns the head value of the new stack using our previous function
    }




// Algos 08/10/2021 Day 6 First in First Out(FIFO) - Queue  
// Thinking of a login queue or waiting list

class SLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(value){
        let new_node = new SLNode(value); // Creating a new node for the queue 
        this.size++; // Increment the size of the queue
        if(this.head == null){ // If the head value is equal to null, you can also check if the this.tail is null, same thing
            this.head = new_node; // Setting the head to the new_node value
            this.tail = new_node; // Setting the tail to the new_node value
        }
        else{
            this.tail.next = new_node; // Attaching the new_node to the end of the queue
            this.tail = new_node; // Moving the tail to the new_node value to add future node
        }
    }
    dequeue(){
        if(head == null) return null; // If the head is null return null
        let answer = this.head; // Setting a variable equal to the head
        if(this.head.next == null){ // If the head is the only node in the list
            this.head = null; // Set the head to null
            this.tail = null; // Set the tail to null
        }
        else{
            this.head = this.head.next; // Moving the head over to the next node and removing the previous head from the queue 
        }
        this.size--; // Decrement the size of the queue 
        return answer; // Return answer or the value of the current head

    }
    isEmpty(){
        if(this.head == null){ // If the head is null then return true the list is empty 
            return true;
        }
        else return false; // Else the list is not, return false

    }
    getSize(){
        return this.size; // Return the this.size variable 

    }
    front(){
        return this.head(); // Returns the value of the head of the queue 

    }

    printPretty() {
        let runner = this.head; // Setting a runner to the head of the stack
        let new_string = "" // Creating an empty string
        while(runner != null){ // While the runner is not null
            new_string = new_string + " " + runner.value; // Adding the values to the empty string variable
            runner = runner.next; // Moving the runner through the stack
        }
        console.log(new_string); // Returning the string

    }
}


// Algos 08/11/2021 Day 7 First in First Out(FIFO) - Queue  

class SLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(value){
        var new_node = new SLNode(value); 

        if (this.isEmpty()) {
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
        this.size++;
        return this;
        }


    dequeue(){
        if (this.isEmpty()) {
            return null;
        }
        var removed_val = this.head.value;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = null;
        }
        this.size--;
        return removed_val;
    }


    isEmpty(){
        return !this.head;
        }
    getSize(){
        return this.size;
        }
    front(){
        return this.head? this.head.value: null;
        }

    printPretty() {
        let runner = this.head;
        let printString = "~ SLQueue ~ HEAD--(";
        while (runner && runner.next) {
            printString+= runner === this.tail? "TAIL ":"";
            printString+= `${runner.value})->(`;
            runner = runner.next;
        }
        printString+= runner === this.tail? "TAIL ":"";
        printString+=`${runner.value})->null\n`;
        console.log(printString);
    }
    // equals
    // Write a method on the Queue class that, given another queue, 
    // will return whether they are equal (same items in same order).
    // Do not use any extra array or objects as storage.
    // Do not alter (pop from or push into) either queue.
    equals(secondQ){
        // Edge Cases 
        if(secondQ instanceof SLQueue){ // Checking to see if the argument is a Queue
            if(secondQ.size != this.size || this.head.value != secondQ.head.value || this.tail.value != secondQ.tail.value){
                // Comparing location values
            return false;
            }
        }
        else if (secondQ instanceof SLStack){ // Checking to see if the argument is a Stack
            if(secondQ.length != this.size || this.head.value != secondQ.head.value){ // Comparing location values
                return false; 
            }
        }
        
        let runner = this.head; // Creating a runner to itterate through the original Queue
        let chaser = secondQ.head;  // Creating a runner to itterate through the new Queue
            while(runner != null){ // While the runner is not null
                if(runner.value != chaser.value){ // If the values ever don't equal
                return false; // Just return false
                }
            runner = runner.next; // Move the runner to the next node
            chaser = chaser.next; // Move the chaser to the next node
        }
        return true; // If the while loops runs without returning false, return true
    }


// isPalindrome
    // Write a method on the Queue class that returns whether or not the queue is a palindrome
    // Use only 1 stack as additional storage (no additional arrays / objects).
    isPalindrome(){
        //The first and last values of the queue must be the same to be palindrome
        if(this.tail.value != this.head.value){
            return false; 
        }

        //Create new stack
        let  newStack = new SLStack(); 
        let runner = this.head;   // Creating a runner to itterate through the current Queue
            while(runner != null){ // While the runner is not equal to null
                newStack.push(runner.value); // Pushing the values from the Queue onto the new stack in LIFO order so "c b a"
                runner = runner.next; // Moving the runner to the next node in the Queue
        } 
        return this.equals(newStack); // Using our previous method to check if the Stack and the Queue are the same 
    }

}

/* 
_ _____ ____ _____ ___ _   _  ____ 
|_   _| ____/ ___|_   _|_ _| \ | |/ ___|
  | | |  _| \___ \ | |  | ||  \| | |  _ 
  | | | |___ ___) || |  | || |\  | |_| |
  |_| |_____|____/ |_| |___|_| \_|\____|
*/

var q1 = new SLQueue()
q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)

var q2 = new SLQueue()
q2.enqueue(3)
q2.enqueue(2)
q2.enqueue(1)
console.log(q1.equals(q2)) // SHOULD RETURN FALSE

var q3 = new SLQueue()
q3.enqueue("a")
q3.enqueue("b")
q3.enqueue("c")
console.log(q3.isPalindrome()) // SHOULD RETURN FALSE


// Algos 08/12/2021 Day 8 First in Last Out(FILO) - Stack

/** Methods will be in the STACK class
   * Returns a new stack that is copy of the original stack.
   * Retain the original order. You may create extra temp 
   * SLStacks and/or SLQueues 
   * as storage.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {SLStack} Copy of the original stack
   */

copy() {
    let temp_stack = new SLStack(); // This will reverse the original stack
    let answer_stack = new SLStack(); // This will reverse it again
    while(! this.isEmpty()){ // While the original stack is not empty
        temp_stack.push(this.pop()); // Push the last value from the stack
    }

    while(! temp_stack.isEmpty()){ // While the temp_stack is not empty
        answer_stack.push(temp_stack.pop()); // Push the last value from the stack
    }
    return answer_stack; // Return it 
}

/**
* Rearranges the stack so that numbers > 0 are 
* on the top and any negatives are on the bottom
* Retain the order of the positives and negatives
* Use extra stacks and/or queues as storage.
* - Time: O(?).
* - Space: O(?).
* @returns {any} The removed item.
*/
partitionPositives() {
let postive_stack = new SLStack(); // Creating a stack to hold positive values
let negative_stack = new SLStack();  // Creating a stack to hold negative values
let original_length = this.length; // Setting a variable an orignal length for the stack 

while(! this.isEmpty()){ // Checking if the original stack is not empty
    if(this.peek() < 0){ // Using the peek function to check value
        negative_stack.push(this.pop()); // If it is less than zero push it onto our negative stack 
    }
    else if (this.peek() >= 0){ // If the value is 0 or positive 
        postive_stack.push(this.pop()); // Push the postive values to our positive stack
    }
}

while(this.length != original_length){ // While the original stack IS empty 
    if(! negative_stack.isEmpty()){ // If the negative stack is not empty 
        this.push(negative_stack.pop()); // Push the negatives into the stavk first
    }
    else { // Else if it is positive
        this.push(postive_stack.pop()); // Push the values after the negatives
    }
}
return this; // Return our new original stack
}

}
var s1 = new SLStack()
s1.push(1)
s1.push(2)
s1.push(3)

var s2 = s1.copy();
s2.printPretty();



// Algos 08/13/2021 Day 8 First in First Out(FIFO) - Queue

class CircleQueue {
    constructor(capacity) {
        this.size = 0
        this.head_index = -1
        this.tail_index = -1

        // Items is an array with length == capacity 
        // where all values are undefined
        this.items = new Array(capacity)
        this.capacity = capacity
    }

    // Adds a new element into the list.
    enqueue(val) {
        // Circle queue is full
        if(this.size == this.capacity){ // If size is equal to the capacity 
            console.log("The queue is full!");
            return false;
        }
        // Circle queue is empty
        else if(this.head_index === -1){ // If the list has no index value
            this.head_index = 0; // Set the head at index 0
            this.tail_index = 0; // Set the tail at index 0
            this.item[this.head_index] = val; // enqueue at the index of 0 the val we have entered in the argument, line 778
            this.size++; // Increment the size by 1 
            return null;
        }
        // Circle queue is partially full
        else{
            // Setting a variable to this.tail mod this.capacity which would give us the next spot Ex: 4 % 5 = 4 then 5 % 5 = 0
            // Our capacity is inserted as an argument 
            let nextSpot = this.tail_index + 1 % this.capacity;
            this.items[nextSpot] = val; // Adding the val to the next open spot
            this.tail_index++; // Increment the tails index value by 1 for the next enqueue 
            this.size++; // Increment the tail size by 1 
        }
    }
    

    dequeue() {
        // Circle queue us empty after dequeue
        if(this.size == 0){
            console.log("Queue is empty");
        }
        // If the queue is empty after dequeue
        else if(this.size == 1){
            let removedNum2 = this.items[this.head_index];
            this.items[this.head_index] = null;
            this.head_index = -1;
            this.tail_index = -1;
            this.size--;
            return removedNum2;
        }
        else{
         // If the queue is empty after dequeue
            let removedNum = this.items[this.head_index];
            this.items[this.head_index] = null;
            this.size--;
            let nextSpot = this.head_index + 1 % this.capacity; 
            this.head_index = nextSpot;
            return removedNum;
        } 
    }

}

let c1 = new CircleQueue(5);
c1.enqueue(1);
console.log(c1);
c1.enqueue(2);

console.log(c1);
console.log(c1.items);


// Algos 08/16/2021 Day 9 BST 
class BSTNode{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    search(val){
        // BST IS EMPTY
        if(this.root === null){
            return false;
        }
        // BST IS NOT EMPTY
        var runner = this.root

        while(runner != null){
            // IS THE VALUE WITHIN THE NODE
            if(runner.value === val){
                return true
            }
            else if(val < runner.value){
                runner = runner.left
            }
            else if(val > runner.value){
                runner = runner.right
            }
        }
        return false
    }

    insertIterative(val){
        // IS THE BST EMPTY?
        
        if(this.root === null){
            this.root = new BSTNode(val);
        }
        
        // HAVE YOUR RUNNER END UP IN THE CORRECT SPOT
        var runner = this.root
        while(runner != null){
            // Check to see if the value is less than the current runners value
            if(val < runner.value){
                if(runner.left === null){
                    runner.left = new BSTNode(val);
                    return 
                }
                runner = runner.left;
            }
            // Check to see if the value is greater than the current runners value
            else if ( val > runner.value){
                // Check if the node on the right is equal to null
                if(runner.right === null){
                    runner.right = new BSTNode(val);
                    return 
                }
                // If it isn't null move the runner onto that node and go through the while loop again
                runner = runner.right;

            }

    insertRecursive(val){

    }
}
    

let newTree = new BST();
binTree.insertIterative(1);
binTree.insertIterative(2);
binTree.insertIterative(3);
binTree.insertIterative(4);
binTree.insertIterative(5);
binTree.insertIterative(6);
binTree.search(2);



// Algos 08/17/2021 Day 10 BST

    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
     isEmpty() {
        if (this.root == null)return true;
        return false;
   
   }
   
   /**
    * Retrieves the smallest integer data from this tree.
    * - Time: O(?).
    * - Space: O(?).
    * @param {Node} current The node that is currently accessed from the tree as
    *    the tree is being traversed.
    * @returns {number} The smallest integer from this tree.
    */
   min() {
       if (this.isEmpty())return null;
       let runner = this.root;
       while (runner.left != null) {
           runner = runner.left;
       }
       return runner.value;
   }
   
   /**
    * Retrieves the smallest integer data from this tree.
    * - Time: O(?).
    * - Space: O(?).
    * @param {Node} current The node that is currently accessed from the tree as
    *    the tree is being traversed.
    * @returns {number} The smallest integer from this tree.
    */
   minRecursive(current = this.root) {
       // 1. BASE CASE - WHEN THE NODE GIVEN IS NULL
       if(current.left == null) return current.value;
       return this.minRecursive(current.left);
   
       // 2. FORWARD PROGRESS
       // 3. RECURSIVE CALL
   }
   
   /**
    * Retrieves the largest integer data from this tree.
    * - Time: O(?).
    * - Space: O(?).
    * @param {Node} current The node that is currently accessed from the tree as
    *    the tree is being traversed.
    * @returns {number} The largest integer from this tree.
    */
   max() {
       if(this.isEmpty())return null;
       let runner = this.root;
       while(runner.right != null) runner = runner.right;
       return runner.value;
   }
   
   /**
    * Retrieves the largest integer data from this tree.
    * - Time: O(?).
    * - Space: O(?).
    * @param {Node} current The node that is currently accessed from the tree as
    *    the tree is being traversed.
    * @returns {number} The largest integer from this tree.
    */
   maxRecursive(current = this.root) {
       if(current.right == null) return current.value;
       return this.maxRecursive(current.right);
   }


// Algos 08/18/2021 Day 11 BST


    ///         WEDNESDAY           ///
    printInOrder(node=this.root) {
        // 1. BASE CASE - CHECK TO SEE IF NODE IS NULL
        if (node == null) return null;

        this.printInOrder(node.left);

        console.log(node.value);

        this.printInOrder(node.right);
        // 2. FORWARD PROGRESS
        // 3. RECURSIVE CALL
    }




    // RETURN A BST TREE GIVEN A SORTED ARRAY
    sortedArrToBST(arr){
        this.root = this.sortedArrToBSTHelper(arr)
    };
    sortedArrToBSTHelper(arr){
        // 1. BASE CASE
        if(arr.length < 1){
            return null
        }
        // CREATE A BST NODE WITH THE MIDDLE NUMBER OF THE CURRENT ARRAY
        var midIndex = Math.floor(arr.length / 2);
        var node = new BSTNode(arr[midIndex]);
        node.left = this.sortedArrToBSTHelper(arr.slice(0, midIndex));
        node.right = this.sortedArrToBSTHelper(arr.slice(midIndex + 1, arr.length));
        return node;
        // 2. FORWARD PROGRESS
        // 3. RECURSIVE CALL

    };

    // Algos 08/18/2021 Day 12 BST

    
    // Size is how many nodes the BST has 
    size(node = this.root) {
        // 1. BASE CASE
        if(node == null){
            return 0
        }
        // FORWARD PROGRESS // We go down the left side and the right side, adding 1 to also include the starting node 
        return this.size(node.left) + this.size(node.right) +1 )
        // RECURSIVE CALLS 
    }

    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree.
     */
    
    // Height is how many level the BST has
    height(node = this.root) {
        if(node == null){ // If the initial node is null, the BST is empty 
            return 0
        } 
        let leftCount = (this.height(node.left));
        let rightCount = (this.height(node.right));
        
        if( leftCount >= rightCount ){
            return leftCount + 1;
        }
        else{
            return rightCount+1;
        }
    }

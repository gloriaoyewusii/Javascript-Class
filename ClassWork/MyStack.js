class MyStack{
    #myStack = new Array(5);
    #size;
    #empty;
    constructor(){
        this.#size = 0;
        this.#empty = true;
    }

    isEmpty(){
        if (this.#size === 0)
            this.#empty = true;
        else
            this.#empty = false;
        return this.#empty;
    }
    push(element){
        for (let index = 0; index < this.#myStack.length; index++){
            if (this.#myStack[index] === undefined){
                this.#myStack[index] = element;
                this.#size++;
                return this.#myStack[index]
            }
        }
    }
    
    search(element){
        for (let index = 0; index < this.#myStack.length; index++){
            if (index === 0 && this.#myStack[index] === element) return 1;
            else if (index > 0 && !this.#myStack[index] === element)
        return -1;
        }
    }

    peek(){
        for (let index = 0; index < this.#myStack.length; index++){
            if (index !== 0) return this.#myStack[this.#size - 1];
            if (index === 0) return "stack is empty";
        }
    }
    pop(){
        for (let index = 0; index < this.#myStack.length; index++){
            if (this.#myStack[index] !== undefined){
                this.#myStack[index] = this.#myStack[this.#size - 1];
                this.#size--;
                return this.#myStack[index];
            }
            if (this.#size === 0) return "stack is empty";
        }
    }


}
module.exports = {MyStack};
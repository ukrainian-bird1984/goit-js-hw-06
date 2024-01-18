class Storage {
  #items;
  constructor(initialValue) {
    this.#items = initialValue;
  }

  getItems() {
    return this.#items;
  }

 addItem(newItem) {
  this.#items += newItem;
}
 

  removeItem(itemToRemove) {
    this.#items = this.#items.split('').filter(item => item !== itemToRemove).join('');
  }
}

const builder = new Storage(".");
console.log(builder.getItems()); // "."
builder.addItem("^");
console.log(builder.getItems()); // "^."
builder.removeItem("^");
console.log(builder.getItems()); // "."

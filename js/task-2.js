class Storage {
  #items;
  constructor(initialValue) {
    this.#items = initialValue;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

const builder = new Storage(".");
console.log(builder.getItems()); // "."
builder.addItem("^");
console.log(builder.getItems()); // "^."
builder.removeItem("^");
console.log(builder.getItems()); // "."

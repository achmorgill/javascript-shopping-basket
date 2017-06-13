
var Item = function(name, price, bogof, quantity) {
  this.name = name;
  this.price = price;
  this.bogof = bogof || false;
  this.quantity = quantity;
}

module.exports = Item;


var Basket = function(){
  this.basket = [];
}

Basket.prototype = {
  noOfItems: function(){
    return this.basket.length;
  },

  addItem: function(item) {
    this.basket.push(item);
  },

  removeItem: function(item) {
    for(var i = 0; i < this.basket.length; i++){
      if (this.basket[i] === item){
        this.basket.splice(i, 1);
      }
    }
  },

  total: function() {
    var total = 0;
    var j;
    for (j in this.basket) {
      if(this.basket[j].bogof){
        total += (this.basket[j].price * (Math.floor((1 + this.basket[j].quantity) / 2)));

      } else {
        total += (this.basket[j].price * this.basket[j].quantity);
      }
    }
    return total;
  }
}


module.exports = Basket;


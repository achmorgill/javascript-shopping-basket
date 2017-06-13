var assert = require("assert");
var Basket = require("../basket.js");
var Item = require ("../item.js");

describe('Basket', function() {

  var basket;
  var item;
  var item2;
  var item3;
  

  beforeEach(function() {
    item = new Item("Beans", 20, false, 3);
    item2 = new Item("Sausages", 200, true, 4);
    item3 = new Item("Coffee", 400, true, 3);
    basket = new Basket();
  });

  it("basket is empty", function() {
    assert.strictEqual(0,basket.noOfItems());
  })

  it("can add items to basket", function(){
    basket.addItem(item);
    assert.strictEqual(1, basket.noOfItems());
  })

  it("can remove item from basket", function() {
    basket.addItem(item);
    basket.removeItem(item);
    assert.strictEqual(0, basket.noOfItems());
  })

  it("can total without bogof", function(){
    basket.addItem(item);
    assert.strictEqual(60, basket.total());
  })

  it("check bogof is applied", function() {
    basket.addItem(item2);
    assert.strictEqual(400, basket.total());
  })

  it("check bogof applied odd number of items", function(){
    basket.addItem(item3);
    assert.strictEqual(800, basket.total());
  })
  
})
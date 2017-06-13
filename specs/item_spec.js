var assert = require("assert");
var Item = require("../item.js");

describe('Item', function() {

  var item;

  beforeEach(function() {
    item = new Item("Beans", 20, false, 3);
  });

  it("check item has name", function() {
    assert.strictEqual("Beans", item.name);
  });

  it("check item has price", function(){
    assert.strictEqual(20, item.price);
  })

  it("check if BOGOF", function() {
    assert.strictEqual(false, item.bogof);
  })

  it("check has quantity", function(){
    assert.strictEqual(3, item.quantity);
  })











})
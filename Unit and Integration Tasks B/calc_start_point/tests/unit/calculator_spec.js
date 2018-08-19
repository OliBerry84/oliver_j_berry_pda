var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add', function(){
    assert.deepStrictEqual(1 + 4, 5)
  }); // test end

  it('it can subtract', function(){
    assert.deepStrictEqual(7 - 4, 3)
  }); // test end

  it('it can multiply', function(){
    assert.deepStrictEqual(3 * 5, 15)
  }); // test end

  it('it can divide', function(){
    assert.deepStrictEqual(21 / 7, 3)
  }); // test end

  it('you can click a number', function(){
    calculator.numberClick(2);
    calculator.numberClick(1);
    assert.deepStrictEqual(calculator.runningTotal, 21)
  }); // test end

  it('you can click an operator', function(){
    calculator.numberClick(2);
    calculator.operatorClick('*')
    calculator.numberClick(1);
    calculator.operatorClick('=')
    assert.deepStrictEqual(calculator.runningTotal, 2)
  }); // test end

  it('you can clear the screen', function(){
    calculator.numberClick(2);
    calculator.operatorClick('*')
    calculator.numberClick(1);
    calculator.operatorClick('=')
    calculator.operatorClick('*')
    calculator.numberClick(3);
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick('=')
    assert.deepStrictEqual(calculator.runningTotal, 4)
  }); // test end

});

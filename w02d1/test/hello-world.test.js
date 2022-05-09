// pull in whichever assert library you'd like to use
// const assert = require('assert');
var chai = require('chai'); 
var assert = chai.assert;

// pull in the main functions that will be tested
const salutation = require('../hello-world');

// write the mocha describe() and it() function 
// calls that will implement the test(s)

describe('hello group', () => {
  it('salutes appropriately', () => {

    const actual = salutation.sayHello('my little friend.');
    const expect = 'hello, my little friend.';

    assert.equal(actual, expect);

  });
  
  it('says Hello properly', () => {
    assert.equal( 'Hello, Pat', 
      salutation.sayHello('Pat') 
    );
  });  
});

describe('goodbye group', () => {
  it('says Goodbye appropriately', () => {
    assert.equal( 'Goodbye, my little friend.', 
      salutation.sayGoodbye('my little friend.')
    );
  });
});

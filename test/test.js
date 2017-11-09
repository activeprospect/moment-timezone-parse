const assert = require('chai').assert,
      parse  = require('../');


describe('Parse', () => {

  it('should handle Z', () => {
    assert.equal(parse('2017-11-08T23:16:00Z').format('Z'), '+00:00');
  });

  it('should handle no zone', () => {
    assert.equal(parse('2017-11-08T23:16:00').format('Z'), '+00:00');
  });

  it('should handle negative 4 digit offset', () => {
    assert.equal(parse('2017-11-08T23:16:00-0200').format('Z'), '-02:00');
  });

  it('should handle negative 4 digit with colon offset', () => {
    assert.equal(parse('2017-11-08T23:16:00-02:00').format('Z'), '-02:00');
  });

  it('should handle positive 4 digit offset', () => {
    assert.equal(parse('2017-11-08T23:16:00+0200').format('Z'), '+02:00');
  });

  it('should handle positive 4 digit with colon offset', () => {
    assert.equal(parse('2017-11-08T23:16:00+02:00').format('Z'), '+02:00');
  });


});
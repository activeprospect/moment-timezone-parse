const assert = require('chai').assert,
      moment = require('moment'),
      parse  = require('../');


describe('Parse', () => {

  it('should handle Z', () => {
    assert.equal(parse('2017-11-08T23:16:00Z'), 'GMT');
  });

  it('should handle no zone', () => {
    assert.equal(parse('2017-11-08T23:16:00'), 'GMT');
  });

  it('should handle negative 4 digit offset', () => {
    assert.equal(parse('2017-11-08T23:16:00-0200'), 'Etc/GMT+2');
  });

  it('should handle negative 4 digit with colon offset', () => {
    assert.equal(parse('2017-11-08T23:16:00-02:00'), 'Etc/GMT+2');
  });

  it('should handle positive 4 digit offset', () => {
    assert.equal(parse('2017-11-08T23:16:00+0200'), 'Etc/GMT-2');
  });

  it('should handle positive 4 digit with colon offset', () => {
    assert.equal(parse('2017-11-08T23:16:00+02:00'), 'Etc/GMT-2');
  });


});
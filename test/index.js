const assert = require('assert'),
    Thaana = require('../index');

describe('Thaana', function() {
  describe('Simple conversion', function() {
    it('should convert simple latin to equivalent unicode', function() {
      assert.equal((new Thaana).toUnicode('udwmcawHum'), 'މުޙައްމަދު')
    });
  });
  
  describe('With spaces', function() {
    it('should correctly convert simple latin to equivalent unicode with spaces', function() {
      assert.equal((new Thaana).toUnicode('udwmcawHum udwmcawHum'), 'މުޙައްމަދު މުޙައްމަދު')
    });
  });
  
  describe('With commas', function() {
    it('should correctly convert simple latin to equivalent unicode with comma', function() {
      assert.equal((new Thaana).toUnicode('udwmcawHum,udwmcawHum'), 'މުޙައްމަދު،މުޙައްމަދު')
    });
  });
  
  describe('With unmapped characters', function() {
    it('should correctly convert simple latin to equivalent unicode with unmapped characters', function() {
      assert.equal((new Thaana).toUnicode('!udwmcawHum,udwmcawHum'), 'މުޙައްމަދު،މުޙައްމަދު!')
    });
  });
});
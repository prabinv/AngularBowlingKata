'use strict';

describe('integration of the bowling application', function() {
  var app =$('');

  beforeEach(module('bowlingjsApp'));

  beforeEach(module('views/main.html'));

  beforeEach(inject(function($rootScope, $compile) {
    var html = '<div ng-app="bowlingjsApp"><div ng-view></div></div>';
    app = $compile(html)($rootScope.$new());
    $rootScope.$digest();
  }));

  it('should have the correct header', function() {
    expect(app.find('h1').text()).toBe('Superheroic Bowling');
  });

  describe('data entry', function() {
    describe('input means', function() {
      it('should have 11 clickable roll means', function() {
        expect(app.find('.roll').length).toBe(11);
      });

      it('should have 1 clickable reset means', function() {
        expect(app.find('.reset').length).toBe(1);
      });
    });

    function roll(pins) {
      app.find('.roll').eq(pins).click();
    }

    function reset() {
      app.find('.reset').eq(0).click();
    }

    function expectRollsDisplayToBe(str) {
      expect(app.find('.rolls-display').text()).toBe(str);
    }

    describe('output means', function() {
      it('should display an initially empty list of rolls', function() {
        expectRollsDisplayToBe('[]');
      });

      it('should display a gutter roll', function() {
        roll(0);
        expectRollsDisplayToBe('[0]');
      });

      it('should display a pindrop roll', function() {
        roll(1);
        expectRollsDisplayToBe('[1]');
      });

      it('should display two rolls', function() {
        roll(0);
        roll(1);
        expectRollsDisplayToBe('[0,1]');
      });

      it('should display an empty list on reset', function() {
        roll(0);
        roll(1);
        reset();
        expectRollsDisplayToBe('[]');
      });
    });
  });
});




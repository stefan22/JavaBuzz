describe('Javabuzz', function() {
  var javabuzz;

  beforeEach(function() {
      javabuzz = new Javabuzz();
  });


  describe('knows when a number is', function() {
    it('divisible by 3', function() {
        javabuzz = new Javabuzz();
        expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function() {
        javabuzz = new Javabuzz();
        expect(javabuzz.isDivisibleByThree(1)).toBe(false);
    });
  });

  describe('knows when a number is', function() {
    it('divisible by 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFive(5)).toBe(true)
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 5', function() {
      javabuzz = new Javabuzz();
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });
  });

  describe('knows when a number is', function() {
    it('divisible by 15', function() {
      javabuzz = new Javabuzz;
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 15', function() {
      javabuzz = new Javabuzz;
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
    });
  });

});

describe("Calculator", function() {

  beforeEach(function() {
  });

  it("should be able to add two numbers", function() {
    //act
    var result = add(100,200);
    //Assert
    expect(result).toEqual(500);
  });

});
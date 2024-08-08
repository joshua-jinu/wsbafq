//Trial 1 - create a Manager array and return it
describe("Create a Manager array and return it - createManager", function() {
 

  it("Defines createManager", function() {
    expect(typeof createManager()).toBe("object");
  });

  it("Add manager details and return it", function() {
    let actualResult = createManager("Alex Ferguson", 78, "Manchester FC", 27);

    let expectedResult = ["Alex Ferguson", 78, "Manchester FC", 27];

    expect(actualResult).toEqual(expectedResult);
  });

  it("Add manager details in the order [managerName, managerAge, currentTeam, trophiesWon]", function() {
    let actualResult = createManager("Alphonse", 68, "Arsenal FC", 15);

    var expectedResult = ["Alphonse", 68, "Arsenal FC", 15];

    expect(actualResult).toEqual(expectedResult);
  });


});

//Trial 2 - create a formation object and return it
describe("Create a team formation object and return it - createFormation", function() {
  it("Defines createFormation", function() {
    expect(typeof createFormation).toBe("function");
  });

  it("Return the value as undefined for the elements missing in the array", function() {
    let expectedResult = {
      defender: 2,
      midfield: 3,
      forward: undefined
    };

    let actualResult = createFormation([2, 3]);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return null when called with an empty array", function() {
    let expectedResult = null;

    let actualResult = createFormation([]);

    expect(actualResult).toEqual(expectedResult);
  });

  it("Return football team's formation [2, 3, 1]", function() {
    let expectedResult = {
      defender: 2,
      midfield: 3,
      forward: 1
    };

    let actualResult = createFormation([2, 3, 1]);

    expect(actualResult).toEqual(expectedResult);
  });


});

//Trial 3 - Filter players that debuted in ___ year
describe("Filter player details based on the debut year -filterByDebut", function() {
  it("Defines filterByDebut", function() {
    expect(typeof filterByDebut).toBe("function");
  });


});

//Trial 4 - Filter players that play at the position _______
describe("Filter players based on  position - filterByPosition", function() {
  it("Defines filterByPosition", function() {
    expect(typeof filterByPosition).toBe("function");
  });

 
});

// //Trial 5 - Filter players that have won ______ award
describe("Filter players based on award - filterByAward", function() {
  it("Defines filterByAward", function() {
    expect(typeof filterByAward).toBe("function");
  });

 });

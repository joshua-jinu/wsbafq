//Progression 1 - create a Manager array and return it
let managerName = 'Alex Ferguson';
let managerAge = 78;
let currentTeam = 'Manchester FC';
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  let arr = [managerName, managerAge, currentTeam, trophiesWon];
  return arr;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  if (formation.length != 0)
    return {
      defender: formation[0],
      midfield: formation[1],
      forward: formation[2],
    };
  else {
    return null;
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

function filterByDebut(year) {}

function filterByPosition() {}

function filterByAward() {}

function filterByAwardxTimes(awardName, noOfTimes) {}

function filterByAwardxCountry(awardName, country) {}

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {}

function SortByNamexAwardxTimes() {}

function SortByNamexOlderThan() {}

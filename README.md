![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

# Kalvium Lab | Create a functionality
## Starter code

The `src/data.js` contains an array of 25 players. We are talking about the array of 25 _objects_ containing the info about each player. Here is one example of how the data will be displayed:

```javascript
{
    name: 'Ashley Young',
    age: 34,
    debut: 2011,
    team: 'Manchester Utd',
    position: 'Defender',
    country: 'England',
    awards: [
        {
            name: "Golden Foot",
            year: 2015
        }
    ]
}
```

### Test


### Progression 1: Gotta coach em all!

Every team starts off with a manager. We need someone to take care of them when Alex isn't around. Create a function `createManager()` that gets the manager's details `managerName, managerAge, currentTeam, trophiesWon` in the same order, and _return an array_ with the manager's details.

### Progression 2: Plan of Action

The coach has prepared a plan of action for the team. He has the formation ready and will provide us with an array `[defender, midfield, forward]`. He will give us the numbers, and we'll need to print that layout on our screen so that we know who to pick (for instance, how many midfielders do we need?). Create a function `createFormation()` that _returns an object_ with the data and keys in the order given in the array.

### Progression 3: Twinkle Twinkle, football star!

Alex needs to know when a player debuted. Alex was just going through some astrological facts and had discovered that there are specific years where lady luck favored all. He believes that selecting those players would be great for his team. Create a function `filterByDebut()` which takes `year` as an argument and _returns an array of player objects_ that debuted in the given year.

### Progression 4: Get in the box!

We've already decided on the team formation. Now we need to filter players based on their position. This would help Alex decide who goes where. Create a function `filterByPosition()` which takes `position` as an argument and _returns an array of player objects_ that play in that position.

### Progression 5: Ooh...shinyyy!

Who doesn't want a player with multiple medals and trophies in his closet? Alex wants you to retrieve data on players who have won a specific award. Create a function `filterByAward()` which takes `awardName` as an argument and _returns an array of player objects_ that who have won that award.

### Progression 6: One a penny, two a penny, hot cross shoots!

Now that we've got players that have won an award, we need to find out how many times they've won a specific award. The more, the merrier. Create a function `filterByAwardxTimes()` which takes `awardName, noOfTimes` as arguments and _returns an array of player objects_ that have won a specific ward a given number of times.

### Progression 7: But where do you come from?

Alex prefers some countries over others. That doesn't mean he's willing to ignore achievements. Why? Well, let's not get into details. Create a function `filterByAwardxCountry` which takes `awardName, country` as arguments and _returns an array of player objects_ that have won a specific award and belong to the given country.

### Progression 8: This, that, and then some more...

Alex is getting very meticulous with his selection criteria. He believes youth overpower age, but they should have won a certain number of awards and belong to his favorite team. Create a function `filterByNoOfAwardsxTeamxAge()` which takes `noOfAwards, team, age` as arguments and _returns an array of player objects_ that have won at least the given number of awards, belong to a specific team and are younger than mentioned age.

### Progression 9: Old is gold.

You know what they say, "Age before beauty". Alex wants you to display the players in order of age, oldest first. He wants to pick some more experienced players than what we currently have in our roster. Create a function `SortByAge()` which _returns an array of player objects_ in descending order of their age.

### Progression 10: Team Game

Retrieve players of a specific team. Then, display them in descending order of the number of awards won by each player. Create a function `FilterByTeamxSortByNoOfAwards()` which takes `team` as an argument and _returns an array of player objects_.

### Challenge 1: The devil is in the details

Find out players who have won a certain award a given number of times. They must also belong to Alex's favorite country. Sort them in good old-fashioned alphabetical order. Create a function `SortByNamexAwardxTimes()` which takes `awardName, noOfTimes, country` as arguments and _returns an array of player objects_.

### Challenge 2: The golden goal

Time to get things finally sorted out. So, two things - one, sort players older than a given age in alphabetical order. Also, sort their awards based on reverse chronological order. Create a function `SortByNamexOlderThan()` which takes an argument `age` and _returns an array of player objects_.
Happy Coding Kalvium ❤️

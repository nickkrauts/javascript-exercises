let thisYear = new Date().getFullYear()

const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findAge = function(people) {
    //find age at death or currently of each person (Death minus Birth || Today minus birth)
    for (let i = 0; i < people.length; i++){
        
        //if person is still living, use today's date instead of death and recalculate
        let findAge = (people[i].yearOfDeath - people[i].yearOfBirth);
        if (Number.isFinite(findAge) == false) {
            let age = thisYear - people[i].yearOfBirth;
            people[i].age = age;
        }else  {       
        //Add age to people object
        people[i].age = findAge;}
        
}
return people;
}

const findTheOldest = function(people) {
    people = findAge(people);
    
    //return array of person with greatest age via sorting of age items
    let longestLife = people[0];
    for (let i = 1; i < people.length; i++){
        if (people[i].age > people[i-1].age){
            longestLife = people[i];
        }
        console.log(people);
        return longestLife;
    }
    
    
};

// Do not edit below this line
module.exports = findTheOldest;

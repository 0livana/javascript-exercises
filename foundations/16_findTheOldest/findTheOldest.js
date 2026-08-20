const data = [
    {
        name: "John",
        DOB: 1990,
        DOD: 2010
    },
    {
        name: "Brian",
        DOB: 1950,
        DOD: 2015
    },
    {
        name: "Cartel",
        DOB: 1974,
        DOD: 2018
    },
    {
        name: "Brian",
        DOB: 1990,
        DOD: 2024
    },
    {
        name: "Brian",
        DOB: 1969,
        DOD: 2020
    }
    
]

const findTheOldest = function(people) {
    let oldest = people[0];

    for (const person of people) {
        const birthYear = person.DOB;
        const deathYear = person.DOD || new Date().getFullYear();

        const age = deathYear - birthYear;
        const oldestAge =
            (oldest.DOD || new Date().getFullYear()) - oldest.DOB;

        if (age > oldestAge) {
            oldest = person;
        }
    }

    return oldest;
};


console.log(findTheOldest(data));

// Do not edit below this line
module.exports = findTheOldest;

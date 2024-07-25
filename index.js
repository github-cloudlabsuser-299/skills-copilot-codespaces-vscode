const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 40 }
    ]
];

// Your code goes here

console.log(data);
const names = data.flat().map(obj => obj.name);
console.log(names);

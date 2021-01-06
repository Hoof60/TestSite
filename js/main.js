
// function hello(firstName, lastName) {
//     console.log(`Hello ${firstName} ${lastName}`);
// }

// const convertPercent = (num) => num / 100;

// const people = [
//     {
//         firstName: 'John',
//         lastName: "Smith",
//         age: 31
//     },
//     {
//         firstName: 'Sally',
//         lastName: "Smith",
//         age: 24
//     },
//  ];

// // people.forEach(function(person){
// //     console.log(person)
// // });

// // people.forEach(person => console.log(person.age));

// // const personName = people.map(person => person.firstName)

// const personAgeUnder30 = people.filter(person => person.age < 30)

// console.log(personAgeUnder30)

// let animal = 'cat';
// // const likesCats = animal === 'cats' ? true : false;

// switch(animal) {
//     case 'dog' :
//     case 'cat':
//         console.log("cog")
//         break;
//     default:
//         console.log("neither");
//         break;
// }

// 
// console.log(likesCats)

//DOM 

//Single Element Selectors

// const list = document.querySelector('#list');

// //Multiple Element Selector
// const listItems = document.querySelectorAll('.list-item');

// listItems.forEach(item => console.log(item.textContent))

// list.lastElementChild.textContent = "New Item"; 

// list.lastElementChild.style.background = 'red'

// list.firstElementChild.innerHTML = "<h1>New Items</h1>"


// console.log(listItems);


//Events 
const btn = document.getElementById('myBtn');
btn.addEventListener('mouseout', function(e){
    btn.style.background = 'blue'
    console.log(e);
});

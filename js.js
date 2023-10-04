// Timeout
// printNumber();
let number = 1;
const printNumber = () => {
    console.log(number);
    number++;
    if (number > 5) {
        clearInterval(intervalId);
    }
};

// const intervalId = setInterval(printNumber, 1000);

// Delayed loop
// const delayedLoop = () => {
//     let i = 1;
//     const printCountDelay = () => {
//         console.log(i);
//         i++;
//         if (i <= 5) {
//             setTimeout(printCountDelay, 1000);
//         }
        
//     };
//     printCountDelay();
// };
// delayedLoop();

// const delayedLoop = () => {
//     for (let i = 1; i <= 5; i++){
//         setTimeout(() => {
//            console.log(i); 
//         }, i*1000);
//     }
// }
// delayedLoop();

// Random
const getUserData = () => {
    return new Promise((resolve, reject) => {
        const randomNune = Math.random();
        if (randomNune >= 0.5) {
            resolve(randomNune)
        } else{reject(`error ${randomNune}`)}
    })
       
};
const promise = getUserData();
promise.then((resolve) => {
    console.log(resolve);
})
    .catch((error) => {
        console.log(error);
})



// Server
const users = [
  {
    id: 1,
    name: "Taras",
    age: 30,
    movies: [],
  },
  {
    id: 2,
    name: "Kate",
    age: 45,
    movies: ["Titanic", "Avatar"],
  },
];
const getUserData2 = (id) => {
  return new Promise((resolve, reject) => {
    
      setTimeout(() => {
           const user = users.find((user) => user.id === id);
     if (user) {
        resolve(user); 
      } else {
        reject(`User with id ${id} not found`);
      }
}, 1000)
     
  });
};

const promise2 = getUserData2(3);
promise2.then((resolve) => {
    console.log(resolve);
})
    .catch((error) => {
        console.log(error);
})
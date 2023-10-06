// Random Resolve
// const randomResolve = () => {
//   return new Promise((resolve, reject) => {
//     const randomNumber = Math.floor(Math.random() * 5) + 1;
//     const randomDelay = Math.floor(Math.random() * 5000) + 1000;
//     setTimeout(() => {
//       if (randomNumber % 2 === 0) {
//         resolve(randomNumber);
//       } else {
//         reject(new Error(`Number ${randomNumber} is odd.`));
//       }
//     }, randomDelay);
//   });
// };
// randomResolve()
//   .then((result) => {
//     console.log(`Resolved with even number: ${result}`);
//   })
//   .catch((error) => {
//     console.error(`Rejected with error: ${error.message}`);
//   });



// Promise API
// const randomResolve = () => {
//   return new Promise((resolve, reject) => {
//     const randomNumber = Math.floor(Math.random() * 5) + 1;
//     const randomDelay = Math.floor(Math.random() * 5000) + 1000;
//     setTimeout(() => {
//       if (randomNumber % 2 === 0) {
//         resolve(randomNumber);
//       } else {
//         reject(new Error(`Number ${randomNumber} is odd.`));
//       }
//     }, randomDelay);
//   });
// };
// const createPromiseArr = (length) => {
//   const promises = [];
//   for (let i = 0; i < length; i++) {
//     promises.push(randomResolve());
//   }
//   return promises;
// };
// const handleResult = (results) => {
//   results.forEach((result) => {
//     if (result.status === "fulfilled") {
//       console.log("🥳 Yasss");
//     } else if (result.status === "rejected") {
//       console.log("🫠🫡 ok");
//     }
//   });
// };
// const promises = createPromiseArr(5);
// Promise.allSettled(promises)
//   .then(handleResult)
//   .catch((error) => {
//     console.error(`Error: ${error.message}`);
//   });
// const racePromises = createPromiseArr(3);
// Promise.race(racePromises)
//   .then((result) => {
//     console.log("🎉 Race winner:", result);
//   })
//   .catch((error) => {
//     console.error(`Race Error: ${error.message}`);
//   });



// Async/Await
// const randomResolve = () => {
//   return new Promise((resolve, reject) => {
//     const randomNumber = Math.floor(Math.random() * 5) + 1;
//     const randomDelay = Math.floor(Math.random() * 5000) + 1000;
//     setTimeout(() => {
//       if (randomNumber % 2 === 0) {
//         resolve(randomNumber);
//       } else {
//         reject(new Error(`Number ${randomNumber} is odd.`));
//       }
//     }, randomDelay);
//   });
// };
// const createPromiseArr = async (length) => {
//   const promises = [];
//   for (let i = 0; i < length; i++) {
//     promises.push(randomResolve());
//   }
//   return Promise.allSettled(promises);
// };
// const handleResult = (results) => {
//   results.forEach((result) => {
//     if (result.status === "fulfilled") {
//       console.log("🥳 Yasss");
//     } else if (result.status === "rejected") {
//       console.log("🫠🫡 ok");
//     }
//   });
// };
// const runAsyncTasks = async () => {
//   const promises = await createPromiseArr(5);

//   handleResult(promises);

//   const racePromises = await createPromiseArr(3);

//   try {
//     const raceResult = await Promise.race(racePromises);
//     console.log("🎉 Race winner:", raceResult);
//   } catch (error) {
//     console.error(`Race Error: ${error.message}`);
//   }
// };

// runAsyncTasks();


// Casino (optional)
const resolveAfterRandomTime = () => {
  return new Promise((resolve) => {
    const randomDelay = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(resolve, randomDelay);
  });
};

const casino = async (stakes) => {
  const results = await Promise.all(
    stakes.map(async (stake) => {
      await resolveAfterRandomTime(); 

      let result;

      if (typeof stake.value === 'number') {
        if (stake.value % 2 === 0) {
          result = { value: stake.value, color: 'red' };
        } else {
          result = { value: stake.value, color: 'black' };
        }
      } else {
        result = { value: stake.value, color: 'green' };
      }

      return result;
    })
  );

  if (results.some((result) => result.color === 'green')) {
    console.log('💵 You won!');
  } else {
    console.log('🫣 You lost!');
  }
};


const stakes = [
  { value: 'red', color: true },
  { value: 'black', color: true },
  { value: 'even', color: false },
  { value: 0, color: true },
  { value: 2, color: false },
];

casino(stakes);




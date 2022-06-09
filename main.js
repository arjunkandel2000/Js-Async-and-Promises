//ashychronoues
// setTimeout(() => {
//     return console.log('arjun');
// }, 3000);

// console.log("hello")

// function _name(arjun) {
//     console.log(`${arjun}`);
// };
// _name('arjun');



// let printHello = name => document.getElementById("demo").innerHTML = `HELLO ${name}`;

// useInfo = (firstName, lastName, callBack) => {
//     const fullName = `${firstName} ${lastName}`
//     callBack(fullName);
// };
// useInfo('arjun', 'kandel', printHello);



//using the promise object to resolve the promise object 
// const hasMeeting = false;
// const Meeting = new Promise((resolve, reject) => {
//     if (!hasMeeting) {
//         const meetingDetails = {
//             venue: 'balaju',
//             time: '10pm',
//             theme: 'Machhapuchhre model trek',
//         }
//         resolve(meetingDetails);
//     } else {
//         reject(new Error('Meeting already scheduled'));
//     };
// });

// const addToCalender = meetingDetails => {
//     const calender = `The meeting will happen on ${meetingDetails.time} at ${meetingDetails.venue} to discuss about ${meetingDetails.theme}.`;
//     return Promise.resolve(calender);
// };

// Meeting
//     .then(addToCalender)
//     .then(res => {
//         // console.log("Meeting scheduled successfully.");
//         // console.log(res.time);
//         document.getElementById("demo").innerHTML = 'Meeting scheduled Successfully.'
//         document.getElementById("bemo").innerHTML = `${res}`

//     })
//     .catch(err => {
//         console.log(err.message);
//     })


//mutiple promises running at same time
// const promise1 = Promise.resolve("fine.");
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("ok fine"), 2000);
// });
// promise1.then(resolve => console.log(resolve));
// promise2.then(res => console.log(res));
// Promise.all([promise1, promise2]).then(resolve => console.log(resolve)); //arrives at same time
// Promise.race([promise1, promise2]).then(resolve => console.log(resolve)); //arrives at same time
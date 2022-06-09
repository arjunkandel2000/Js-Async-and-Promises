const hasMeeting = false;
const Meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            venue: 'balaju',
            time: '10pm',
            theme: 'Machhapuchhre model trek',
        }
        resolve(meetingDetails);
    } else {
        reject(new Error('Meeting already scheduled'));
    };
});

const addToCalender = meetingDetails => {
    const calender = `The meeting will happen on ${meetingDetails.time} at ${meetingDetails.venue} to discuss about ${meetingDetails.theme}.`;
    return Promise.resolve(calender);
};

async function myFunction() {
    try {
        const meetingDetails = await Meeting;
        const message = await addToCalender(meetingDetails);
        console.log(message);
    } catch (err) {
        console.log(err.message);
    }
};
myFunction();
var absLast = require('./absLastEventsValue');

var events = [{
        "value": 9,
        "event_type": 1,
        "time": 3
    },
    {
        "value": 12,
        "event_type": 2,
        "time": 6
    },
    {
        "value": 2,
        "event_type": 1,
        "time": 8
    },
    {
        "value": 45,
        "event_type": 1,
        "time": 2
    },
    ,
    {
        "value": 55,
        "event_type": 1,
        "time": 1
    },
    {
        "value": 42,
        "event_type": 3,
        "time": 2
    },
    {
        "value": 23,
        "event_type": 3,
        "time": 1
    },
    {
        "value": 9,
        "event_type": 3,
        "time": 5
    },
]

var last_two_biggest = absLast.absLastTwoBiggestValueEvents(events);


console.log("last_two_biggest :")
for (key in last_two_biggest) {
    console.log("For event type " + key)
    console.log("biggest value :")
    console.log(last_two_biggest[key].biggest.value + ' ' + last_two_biggest[key].biggest.time)
    console.log("second biggest value :")
    console.log(last_two_biggest[key].second_biggest.value + ' ' + last_two_biggest[key].second_biggest.time)
    console.log("abs value :")
    console.log(last_two_biggest[key].abs)
};

// var last_two = absLast.absLastTwoValueEvents(events);

// console.log("last_two")
// for (key in last_two) {
//     console.log("last value :")
//     console.log(last_two[key].last.value + ' ' + last_two[key].last.time)
//     console.log("before last value :")
//     console.log(last_two[key].before_last.value + ' ' + last_two[key].before_last.time)
//     console.log("abs value :")
//     console.log(last_two[key].abs)
// };
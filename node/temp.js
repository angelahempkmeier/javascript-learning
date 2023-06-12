const schedule = require('node-schedule');

const task1 = schedule.scheduleJob('*/5*11**1', function () {
    console.log("task 1! ", new Date().getSeconds());
});
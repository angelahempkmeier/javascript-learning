const schedule = require('node-schedule');

const task1 = schedule.scheduleJob('*/5*9**2', function () {
    console.log("task 1! ", new Date().getSeconds());
});

setTimeout(function () {
    task1.cancel();
    console.log("Task1 canceled.");
}, 2000);

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(2, 5)];
rule.hour = 12;
rule.second = 30;

const task2 = schedule.scheduleJob(rule, function () {
    console.log('task2', new Date().getSeconds());
});
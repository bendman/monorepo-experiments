const chalk = require('chalk');
const cowsay = require('cowsay');

module.exports = (text = 'hello') => console.log(
    chalk.blue`${cowsay.say({text})}`
);

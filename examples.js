const fs = require('fs');
const path = require('path');

// clear
process.stdout.write('\x1bc');

fs
    .readdirSync(path.join(__dirname, './examples'), 'utf-8')
    .filter(file => file.endsWith('.js'))
    .forEach(file => {
        require(path.join(__dirname, './examples', file));
    });
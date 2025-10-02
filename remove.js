const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'logs');

if(fs.existsSync(logsDir)){
    fs.readdirSync(logsDir).forEach(file => {
        fs.unlinkSync(path.join(logsDir, file));
        console.log(`${file} deleted`);
    });
    fs.rmdirSync(logsDir);
    console.log(`Logs file removed:`);
} else {
    console.log(`Logs directory does not exist.`);
}


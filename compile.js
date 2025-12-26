/**

staqlt automation script to trigger Nuitka compilation

This script mimics the process of automating binary creation. */ const { exec } = require('child_process'); const fs = require('fs');

const compileProject = () => { console.log("Starting staqlt Binary Hardening Process...");

// Command to run Nuitka: 
// --standalone: create a distribution folder
// --onefile: package everything into a single binary
// --plugin-enable=numpy: (example) if using specific libs
const command = "python -m nuitka --standalone --onefile main.py";

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Compilation Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`Nuitka Logs: ${stderr}`);
    }
    console.log(`Success: ${stdout}`);
    console.log("Binary generated in the 'dist' or current directory.");
});


};

compileProject();
const { spawn } = require('child_process');
console.log("Python script running");
module.exports = {
    start: function(dCriminal, date, callback){
        const childPython = spawn('python', ['model.py', `${dCriminal}`, `${date}`]);
        let result;
        childPython.stdout.on('data', (data) => {
        
            result = `${data}`;
      
        });

        childPython.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
            // return data;
        });

        childPython.on('close', (code) => {
         
            return callback(result);
          
        });
   
    }
}

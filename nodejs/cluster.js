/*
The cluster module in Node.js is used to create child processes (workers) that share the same server port.
This is useful for scaling an application across multiple CPU cores,
as Node.js runs single-threaded by default.

How the cluster Module Works
A master process creates worker processes.
Each worker process runs the application independently.
All workers share the same TCP connection, allowing them to handle requests simultaneously.
If a worker crashes, the master can automatically restart it to maintain availability.
*/


const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isMaster) {
    // Master process: Fork workers
    const numCPUs = os.cpus().length; // Get the number of CPU cores
    console.log(`Master process is running (PID: ${process.pid})`);
    console.log(`Forking ${numCPUs} workers...`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork(); // Fork a worker process
    }

    // Listen for worker exit events
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} exited. Restarting...`);
        cluster.fork(); // Restart the worker
    });

} else {
    // Worker process: Handle HTTP requests
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end(`Handled by worker (PID: ${process.pid})\n`);
    }).listen(3000);

    console.log(`Worker process started (PID: ${process.pid})`);
}

const memoryUsage = process.memoryUsage();
console.log(memoryUsage);
/* Sample Output
{
    rss: 34340864,       // Resident Set Size - total memory allocated for the process
    heapTotal: 10240000, // V8's total memory allocated for the heap
    heapUsed: 5120000,   // Memory actually used on the heap
    external: 200000,    // Memory used by C++ objects bound to JavaScript objects
    arrayBuffers: 100000 // Memory allocated for ArrayBuffer and SharedArrayBuffer
}
*/
/*
rss (Resident Set Size):
    Total memory allocated for the process, including:
    Code
    Stack
    Heap
    C++ bindings
    This represents the total physical memory usage.
heapTotal:
    Total memory allocated for the JavaScript heap by V8.
    It is a subset of rss.
heapUsed:
    Memory currently used by JavaScript objects.
    A subset of heapTotal.
external:
    Memory used by C++ objects bound to JavaScript objects.
arrayBuffers:
    Memory allocated for ArrayBuffer and SharedArrayBuffer objects.
*/

//Log Memory Statistics:
setInterval(() => {
    const { rss, heapTotal, heapUsed, external } = process.memoryUsage();
    console.log(`RSS: ${rss} | Heap Total: ${heapTotal} | Heap Used: ${heapUsed} | External: ${external}`);
}, 5000);

//Alerts for High Memory Usage:
//Trigger an alert or take action when memory usage exceeds a certain threshold:
if (process.memoryUsage().heapUsed > 100 * 1024 * 1024) { // Example: 100MB
    console.warn('Memory usage exceeded 100MB!');
}
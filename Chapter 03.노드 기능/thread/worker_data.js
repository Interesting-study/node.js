const {
    Worker, isMainThread, workerData
} = require('worker_threads');

if (isMainThread) {
    const threads = new Set();
    
}
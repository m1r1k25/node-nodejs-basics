import { Worker, workerData } from 'worker_threads'
import { cpus } from 'os';

import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

import path from 'path'
const pathToWorker = path.join(__dirname, 'worker.js');

const startNumber = 10

const performCalculations = async () => {
    const getWorkerPromise = (num) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(pathToWorker, { 
                workerData: startNumber + num,
            });
            worker.on('message', (msg) => resolve(msg));
            worker.on('error', (msg) => reject(msg));
        });
    }

    const workersResults = await Promise.allSettled(cpus().map((_, index) => getWorkerPromise(index)));

    const result = workersResults.reduce((acc, {status, value}) => {
        return [...acc, {
            status: status === 'fulfilled' ? 'resolved' : 'error',
            data: status === 'fulfilled' ? value : null,
        }]
    }, [])
    
    console.log(result)
};



await performCalculations();
import { spawn } from 'child_process'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

import path from 'path'
const pathToScript = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {

    const child = spawn('node', [pathToScript, ...args.split(' ')])

    process.stdin.on('data', msg => child.stdin.write(msg))
    
    child.stdout.on('data', (data) => {
        console.log(String(data))
        console.log('some message \n')
    })
};

spawnChildProcess('--arg1 --arg2');
import { promises as fs, createReadStream } from "fs"

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

import path from 'path'
const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    const readableStream = createReadStream(pathToFile)   
    readableStream.pipe(process.stdout) 
};

await read();
import { promises as fs, createWriteStream } from "fs"

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

import path from 'path'
const pathToFile = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const stream = createWriteStream(pathToFile);
    process.stdin.on('data', (chunk) => {
      stream.write(chunk);
    });
};

await write();
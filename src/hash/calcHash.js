import { createHash } from 'crypto'

import { readFile } from 'fs/promises'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

import path from 'path'
const pathToFile = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const text = await readFile(pathToFile, 'utf8') 
    const hash = createHash('sha256').update(text).digest('hex');
    console.log(hash)
};

await calculateHash();
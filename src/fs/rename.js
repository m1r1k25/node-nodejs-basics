import fs from 'fs/promises'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

import path from 'path'
const pathToWrongFile = path.join(__dirname, 'files', 'wrongFilename.txt');
const pathToProperFile = path.join(__dirname, 'files', 'properFilename.md');

const errorText = 'FS operation failed'

const rename = async () => {
    try {
        await fs.access(pathToProperFile)
        throw new Error(errorText);
    } catch(err) {
        try {
            if(err.message === errorText) throw new Error(errorText);
            await fs.access(pathToWrongFile)
            await fs.rename(pathToWrongFile, pathToProperFile);
            console.log('Files had been renamed succesfully')
        }
        catch {
            throw new Error(errorText)    
        }
    } 
};

await rename();
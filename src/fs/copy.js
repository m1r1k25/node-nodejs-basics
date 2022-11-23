import fs from 'fs/promises'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

import path from 'path'
const pathToNewFolder = path.join(__dirname, 'files-copy');
const pathToStartFolder = path.join(__dirname, 'files');

const errorText = 'FS operation failed'

const copy = async () => {
    try {
        await fs.access(pathToNewFolder)
        throw new Error(errorText);
    } catch(err) {
        try {
            if(err.message === errorText) throw new Error(errorText);
            await fs.access(pathToStartFolder)
            await fs.mkdir(pathToNewFolder);
            const files = await fs.readdir(pathToStartFolder);
            
            files.forEach(async (file) => {
                const startFile = path.join(__dirname, 'files', file);
                const newFile = path.join(__dirname, 'files-copy', file);
                await fs.copyFile(startFile, newFile);
            });
            console.log('Files had been coppied succesfully')
        }
        catch {
            throw new Error(errorText)    
        }
    }
};

copy();
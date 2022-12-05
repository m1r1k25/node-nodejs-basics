import fs from 'fs/promises'

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
import path from 'path'

const pathToFile = path.join(__dirname, 'files', 'fresh.txt')

const errorText = 'FS operation failed'
const text = 'I am fresh and young'
const successMessage = 'File has been created'

const create = async () => {
    try {
        await fs.access(pathToFile);
        throw new Error(errorText);
      } catch(err) {
        try {
            if(err.message === errorText) throw new Error(errorText)
            await fs.writeFile(pathToFile, text)
            console.log(successMessage)
        } catch {
            throw new Error(errorText)
        }        
      }
};

await create();
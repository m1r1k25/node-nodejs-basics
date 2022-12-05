import fs from 'fs/promises'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

import path from 'path'
const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt')

const errorText = 'FS operation failed'

const remove = async () => {
    try {
        await fs.access(pathToFile)
        await fs.unlink(pathToFile)
        console.log('File had been removed')
      } catch(err) {
          throw new Error(errorText)
      }
};

await remove();
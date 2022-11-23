import fs from 'fs/promises'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

import path from 'path'
const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt')

const errorText = 'FS operation failed'

const read = async () => {
    try {
        await fs.access(pathToFile)
        const readableFile = await fs.readFile(pathToFile, 'utf8')
        console.log(readableFile)
      } catch(err) {
          throw new Error(errorText)
      }
};

await read();
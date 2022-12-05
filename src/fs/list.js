import fs from 'fs/promises'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

import path from 'path'
const pathToFolder = path.join(__dirname, 'files')

const errorText = 'FS operation failed'

const list = async () => {
    try {
        await fs.access(pathToFolder)
        const list = await fs.readdir(pathToFolder)
        console.log(list)
      } catch(err) {
          throw new Error(errorText)
      }
};

await list();
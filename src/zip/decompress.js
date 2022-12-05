import {createReadStream, createWriteStream} from 'fs';
import {createGunzip} from 'zlib';

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

import path from 'path'
const pathToFileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
const pathToArchiveFile = path.join(__dirname, 'files', 'archive.gz');

const decompress = async () => {
    const readStream = createReadStream(pathToArchiveFile)
    const archive = createGunzip();
    const writeStream = createWriteStream(pathToFileToCompress)
    readStream
        .pipe(archive)
        .pipe(writeStream)
};

await decompress();
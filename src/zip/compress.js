import {createReadStream, createWriteStream} from 'fs';
import {createGzip} from 'zlib';

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

import path from 'path'
const pathToFileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
const pathToArchiveFile = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const readStream = createReadStream(pathToFileToCompress)
    const archive = createGzip();
    const writeStream = createWriteStream(pathToArchiveFile)
    readStream
        .pipe(archive)
        .pipe(writeStream)
};

await compress();
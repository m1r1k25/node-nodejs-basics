const transform = async () => {
    const transformText = (text) => text.split('').reverse().join('') + '\n';
    process.stdin.on('data', (data) => process.stdout.write(transformText(data.toString())))
    process.on('SIGINT', () => process.exit(0))
};

await transform();
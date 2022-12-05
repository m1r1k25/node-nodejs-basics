const parseArgs = () => {
    const result = process.argv.slice(2).reduce((acc, cur) => {
        if(cur.startsWith('--')) return `${acc} ${cur.slice(2)} is `
        return `${acc}${cur},`
    }, '')
    console.log(result)
};

parseArgs();
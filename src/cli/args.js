const parseArgs = () => {
    const args = process.argv.slice(2)
    const result = args.reduce((acc, cur, index) => {
        return [...acc, `${cur.slice(2)} is value${index + 1}` ]
    }, []).join(', ')
    console.log(result)
};

parseArgs();
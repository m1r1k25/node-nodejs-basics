const parseEnv = () => {
    const allEnv = process.env
    const rssKeys = Object.keys(allEnv).filter((key) => key.startsWith('RSS_'))
    const result = rssKeys.reduce((acc, cur) => {
        return [...acc, `${cur}=${allEnv[cur]}`]
    }, []).join('; ')
    console.log(result)
};

parseEnv();
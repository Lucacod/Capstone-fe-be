const logger = (req, res , next) => {
    const {url, ip , method} = req

    console.log(`${new Date ().toISOString()} Effettutata richiesta ${method} all'endpoint ${url} da ip ${ipè}`)

    next()
}

module.exports = logger

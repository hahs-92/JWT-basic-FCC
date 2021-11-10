const jwt = require('jsonwebtoken')
//config
const { config } = require('../config/config')
//errors
const { UnauthenticateError } = require('../errors')

const authMiddleware = async(req, res, next) => {
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1]

    if(!authHeader || !authHeader.startsWith('Bearer '))
        throw new UnauthenticateError('Not authorized to access this route');

    try {
        const decoded = jwt.verify(token, config.secretJwt)
        const { username } = decoded

        req.user = { username }

    } catch (error) {
        throw new UnauthenticateError('Not authorized to access this route');
    }

    next()
}

module.exports = authMiddleware

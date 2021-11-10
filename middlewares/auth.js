const jwt = require('jsonwebtoken')
//config
const { config } = require('../config/config')
//errors
const CustomAPIError = require('../errors/custom-error')

const authMiddleware = async(req, res, next) => {
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1]

    if(!authHeader || !authHeader.startsWith('Bearer '))
        throw new CustomAPIError('Not Token', 401);

    try {
        const decoded = jwt.verify(token, config.secretJwt)
        const { username } = decoded

        req.user = { username }

    } catch (error) {
        throw new CustomAPIError('Not authorized to access this route', 401);
    }

    next()
}

module.exports = authMiddleware

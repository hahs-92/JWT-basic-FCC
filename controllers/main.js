const jwt = require('jsonwebtoken')
//CONFIG
const { config } = require('../config/config')
//errros
const CustomAPIError = require('../errors/custom-error')


const login = async (req, res) => {
    const {  username, password } = req.body

    if(!username || !password)
        throw new CustomAPIError('Please provide email and password', 400);

    const token = jwt.sign( {username} , config.secretJwt,{ expiresIn: '30d'})

    res.status(200).json({
        msg: 'user created',
        token: token
    })
}

const dashboard = async (req, res) => {

    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1]
    const luckyNumber = Math.floor(Math.random() * 100)

    if(!authHeader || !authHeader.startsWith('Bearer '))
        throw new CustomAPIError('Not Token', 401);

    try {
        const decoded = jwt.verify(token, config.secretJwt)

        res.status(200).json({
            msg: `Hello , ${decoded?.username}`,
            secret: `Here is your authorized data, your lucky number is ${ luckyNumber }`
        })
    } catch (error) {
        throw new CustomAPIError('Not authorized to access this route', 401);
    }
}

module.exports = {
    login,
    dashboard
}

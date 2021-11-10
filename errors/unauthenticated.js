const { StatusCodes } = require('http-status-codes')
//error
const CustomAPIError = require('./custom-error')

class UnauthenticateError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnauthenticateError

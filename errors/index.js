//errors
const CustomAPIError = require('./custom-error')
const  BadRequestError = require('./bad-request')
const  UnauthenticateError = require('./unauthenticated')

module.exports = {
    CustomAPIError,
    BadRequestError,
    UnauthenticateError
}

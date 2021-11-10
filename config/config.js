require('dotenv').config()

const config = {
    port: process.env.PORT,
    mongoURI: process.env.MONGO_URI,
    secretJwt: process.env.SECRET_JWT
}

module.exports = { config }

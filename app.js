//async errors
require('express-async-errors')
//config
const { config } = require('./config/config')
//middlewares
const notFoundMiddleware = require('./middlewares/not-found')
const errorHandlerMiddleware = require('./middlewares/error-handler')
//routes
const routeMain = require('./routes/main')


const port = config.port || 5000

const express = require('express')
const app = express();

// middleware
app.use(express.static('./public'))
app.use(express.json())

//routes
app.use('/api/v1', routeMain)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)



const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error);
  }
}

start()

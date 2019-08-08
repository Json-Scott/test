const Koa = require('koa')
const parser = require('koa-bodyparser')
const InitMannager = require('../test/core/init')
const catchError = require('../test/middlewares/exception')

require('./models/user')

const app = new Koa()

app.use(catchError)
app.use(parser())
InitMannager.initCore(app)


app.listen(3000)
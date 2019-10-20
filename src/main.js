const Koa = require('koa')
const logger = require('koa-logger')

const app = new Koa()

app.use(logger())

app.use(async ctx => {
    ctx.body = 'Hello, Koa!'
})

console.log('server listening on http://localhost:3000')
app.listen(3000)

const Koa = require('koa')

const app = new Koa()

app.use(async ctx => {
    ctx.body = 'Hello, Koa!'
})

console.log('server listening on http://localhost:3000')
app.listen(3000)

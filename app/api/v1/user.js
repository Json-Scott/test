const Router = require('koa-router')
const router = new Router({
    prefix: '/v1/user'
})

// 注册
router.post('/register', async (ctx) => {
    console.log(ctx)
})

module.exports = router;
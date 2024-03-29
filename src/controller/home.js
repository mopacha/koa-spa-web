const DemoService = require('../service/demo-service')
const { Get, Post, Controller } = require('@coofy/bastet').router

@Controller('/')
class HomeController {
  @Get('/')
  async home(ctx, _next) {
    const title = 'demo'
    await ctx.render('demo/index', {
      title
    })
  }

  @Post('/api/login')
  async login(ctx, _next) {
    const data = await DemoService.login(ctx, ctx.request.body)
    ctx.body = data
  }
}

module.exports = HomeController

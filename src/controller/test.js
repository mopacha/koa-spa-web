const { Get, Controller } = require('@coofy/bastet').router

@Controller('/test')
class DemoController {
	@Get('/')
  async demo(ctx, _next) {
    const title = 'test'
    await ctx.render('test/index', {
      title
    })
  }
}

module.exports = DemoController

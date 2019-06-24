

const { Get, Controller } = require('@coofy/bastet').router

@Controller('/hs')
class HealthController {
	@Get('/')
  async health(ctx, _next) {
    ctx.response.body = 'OK'
  }
}

module.exports = HealthController

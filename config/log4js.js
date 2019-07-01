module.exports = {
  appenders: {
    out: {
      type: 'console'
    },
    'koa-spa': {
      type: 'dateFile',
      filename: `logs/koa-spa-web`,
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      backups: 5,
      maxLogSize: 10485760,
      compress: true
    }
  },
  categories: {
    default: {
      appenders: ['koa-spa', 'out'],
      level: 'error'
    }
  },
  pm2: true,
  pm2InstanceVar: 'INSTANCE_ID'
}

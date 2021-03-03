const { i18n } = require('./next-i18next.config')

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

module.exports = {
  env: {
    DEFAULT_LOCALE: process.env.DEFAULT_LOCALE,
  },
  i18n,
}

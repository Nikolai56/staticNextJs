const { i18n } = require('./next-i18next.config')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

module.exports = {
  i18n,
  ...withMDX({
    pageExtensions: ['js', 'jsx', 'mdx'],
  }),
}

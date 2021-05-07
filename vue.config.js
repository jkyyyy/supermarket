module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // '@': 'src',
        'common': '@/common',
        'components': '@/components',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
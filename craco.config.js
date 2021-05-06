const path = require('path')

const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  webpack: {
    alias: {
      '@@': pathResolve('.'),
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@common': pathResolve('src/common'),
      '@components': pathResolve('src/components'),
      '@hooks': pathResolve('src/hooks'),
      '@pages': pathResolve('src/pages'),
      '@store': pathResolve('src/store'),
      '@utils': pathResolve('src/utils')
      // 此处是一个示例，实际可根据各自需求配置
    }
  }
}

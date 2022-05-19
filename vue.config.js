module.exports = {
    devServer: {
        host: 'localhost',
        port: '8080',
        publicPath: "/",
        proxy: {
            '/api': {
                target: "http://mall-pre.springboot.cn",
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}
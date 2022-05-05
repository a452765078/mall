module.exports = {
    devServer: {
        host: 'localhost',
        port: '8080',
        publicPath: "/",
        proxy: {
            '/api': {
                target: "https://www.imooc.com",
                changeOrigin: true,
                pathRwrite: {
                    '/api': ''
                }
            }
        }
    }
}
module.exports = {
    devServer: {
        host: 'localhost',
        port: '8080',
        publicPath: "/",
        proxy: {
            '/u': {
                target: "https://www.imooc.com",
                changeOrigin: true,
                pathRwrite: {
                    '/u': ''
                }
            }
        }
    }
}
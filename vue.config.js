module.exports = {
    devServer: {
        host: 'localhost',
        post: '8080',
        proxy: {
            '/api': "https://www.imooc.com"
        }
    }
}
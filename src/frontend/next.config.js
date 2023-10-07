/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpack: (config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
            ignored: ['**/node_modules']
        }
        return config
    })
}

module.exports = nextConfig
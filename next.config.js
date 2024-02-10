/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [{ hostname: 'cdn.sanity.io', pathname: '/**/*' }],
    },
}

module.exports = nextConfig

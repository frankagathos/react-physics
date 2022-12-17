module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      exclude: /node_modules/,
      use: {
        loader: 'file-loader',
        // options: {
        //   publicPath: "/_next/static/images",
        //   outputPath: "static/images/",
        //   name: '[name].[ext]' // keep the original name
        // }
      },
    })
    // For bin file
    config.module.rules.push({
      test: /\.(bin)$/,
      use: {
        loader: 'file-loader',
        // options: {
        //   publicPath: "/_next/static/images",
        //   outputPath: "static/images/",
        //   name: '[name].[ext]' // keep the original name
        // }
      },
    })
    return config
  },
  // Allow fetching from other origins
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]
  },
}

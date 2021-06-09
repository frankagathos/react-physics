module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
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
    });
    return config
  },
}
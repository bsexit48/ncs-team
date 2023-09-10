// const { withSentryConfig } = require("@sentry/nextjs")
// const withTM = require("next-transpile-modules")(["ultimate_player-marketplace-theme"])

// const sentryWebpackPluginOptions = {
//   silent: true,
// }
// module.exports = withSentryConfig(
//   withTM({
//     swcMinify: false,
//     experimental: {
//       esmExternals: false,
//     },
//   }),
//   sentryWebpackPluginOptions,
// )

module.exports = {
  reactStrictMode: false,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },
};

import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/pages/api-reference/next-config-js/webpack
  webpack(config) {
    config.plugins.push(new MonacoWebpackPlugin({
      languages: ['html', 'javascript', 'css']
    }));
    return config;
  }
};

export default nextConfig;

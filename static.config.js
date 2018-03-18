import React from 'react'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

// Paths Aliases defined through tsconfig.json
const typescriptWebpackPaths = require('./webpack.config.js')

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getSiteData: () => ({
    title: 'Samuli Suomi'
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/pages/Home',
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
    ]
  },
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Samuli Suomi" />
          <meta name="author" content="Samuli Suomi" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        </Head>
        <Body>
          {children}
          <style id="jss-server-side">{renderMeta.jssStyles}</style>
        </Body>
      </Html>
    )
  },
  webpack: (config, { defaultLoaders, stage }) => {
    // Add .ts and .tsx extension to resolver
    config.resolve.extensions.push('.ts', '.tsx')

    // Add TypeScript Path Mappings (from tsconfig via webpack.config.js)
    // to react-statics alias resolution
    config.resolve.alias = typescriptWebpackPaths.resolve.alias

    // We replace the existing JS rule with one, that allows us to use
    // both TypeScript and JavaScript interchangeably
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: defaultLoaders.jsLoader.exclude, // as std jsLoader exclude
            use: [
              {
                loader: 'babel-loader',
              },
              {
                loader: require.resolve('ts-loader'),
                options: {
                  transpileOnly: true,
                },
              },
            ],
          },
          {
            test: /\.s(a|c)ss$/,
            use:
              stage === 'dev'
                ? [
                  { loader: 'style-loader' },
                  { loader: 'css-loader' },
                  { loader: 'sass-loader' },
                  { loader: 'postcss-loader' }
                ]
                : ExtractTextPlugin.extract({
                  use: [
                    {
                      loader: 'css-loader',
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: false,
                      },
                    },
                    {
                      loader: 'sass-loader',
                      options: { includePaths: ['src/'] },
                    },
                    {
                      loader: 'postcss-loader'
                    }
                  ],
                }),
          },
          defaultLoaders.cssLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
  },
}

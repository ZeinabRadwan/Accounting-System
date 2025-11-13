const {join} = require('path')
const mix = require('laravel-mix')

// Simplified configuration for Node.js v14 compatibility
mix
  .js('resources/js/central.js', 'public/js')
  .js('resources/js/tenant.js', 'public/js')
  .js('resources/js/rtl-manager.js', 'public/js')
  .vue()
  .sass('resources/sass/custom_ltr.scss', 'public/css/custom_ltr.css')
  .sass('resources/sass/custom_rtl.scss', 'public/css/custom_rtl.css')
  .sass('resources/sass/app.scss', 'public/css')

if (mix.inProduction()) {
  mix.disableNotifications()
    .version();
} else {
  mix.sourceMaps()
    .options({
      hmrOptions: {
        host: 'localhost',
        port: 8081
      }
    })
}

mix.webpackConfig((webpack) => {
  return {
    output: {
      chunkFilename: 'js/[name].js'
    },
    module: {
      rules: [
        {
          test: /\.wav$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        // {
        //   test: /\.s[ac]ss$/i,
        //   use: [
        //     'vue-style-loader',
        //     'css-loader',
        //     {
        //       loader: 'sass-loader',
        //       options: {
        //         api: 'modern-compiler',
        //         sassOptions: {
        //           api: 'modern-compiler'
        //         }
        //       }
        //     }
        //   ]
        // }
      ],
    },
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '~': join(__dirname, './resources/js'),
        '@': join(__dirname, './resources/js')
      }
    },
    optimization: {
      minimize: false
    },
    performance: {
      hints: false
    }
  }
})
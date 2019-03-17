const builtAt = new Date().toISOString()
const path = require('path')

const baseUrl = 'https://ilusons.com';

module.exports = {
  env: {
    baseUrl
  },
  head: {
    title: 'Freelance Software Development | ilusons',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
    }, {
      name: 'theme-color',
      content: '#c1c1c1'
    }, {
      name: 'robots',
      content: 'index, follow'
    }],
    link: [{
      rel: 'icon',
      type: 'image/png',
      href: '/img/favicon.png'
    }, {
      rel: 'icon',
      type: 'image/ico',
      href: '/img/favicon.ico'
    }, {
      rel: 'manifest',
      href: '/manifest.json'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#5a46ff',
    height: '3px'
  },
  /*
   ** Build configuration
   */
  css: [
    'normalize.css/normalize.css',
    '@/assets/css/main.scss'
  ],

  build: {
    mode: 'spa',
    analyze: false,
    analyze: {
      analyzerMode: 'static'
    },
    extend(config) {
      const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/');
      config.module.rules.splice(config.module.rules.indexOf(rule), 1);

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'static'),
        options: {
          vue: {
            root: "dynamicMarkdown"
          }
        }
      }, {
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          placeholder: true,
          quality: 60,
          size: 1400,
          adapter: require('responsive-loader/sharp')
        }
      }, {
        test: /\.(gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
      });
    }
  },
  plugins: [
    '~/plugins/lazyload',
    '~/plugins/globalComponents',
    {
      src: '~plugins/ga.js',
      ssr: false
    },
    '~/plugins/effects',
  ],
  modules: [
    ['nuxt-sass-resources-loader', [
      '@/assets/css/utilities/_variables.scss',
      '@/assets/css/utilities/_helpers.scss',
      '@/assets/css/base/_grid.scss',
      '@/assets/css/base/_buttons.scss'
    ]]
  ],
  generate: {
    routes: ['404']
  }
}
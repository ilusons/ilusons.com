export default ({
  app
}) => {
  try {
    if (process.env.NODE_ENV !== 'production') return (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-82826377-1', 'auto')
    app.router.afterEach((to, from) => {
      try {
        ga('set', 'page', to.fullPath)
        ga('send', 'pageview')
      } catch (e) {
        // ?
      }
    })
  } catch (e) {
    // ?
  }
}
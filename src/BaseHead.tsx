import React from 'react'
import { Head } from 'react-static'

const ME = 'Samuli Suomi'

export default () => (
  <Head>
    <meta name="description" content={ ME }  />
    <meta name="author" content={ ME } />

    { /* Mobile-specific Metas */}
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    { /* Font */ }
    <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" type="text/css" />

    { /* Google Analytics */ }
    <script>
      {
      `(function(i, s, o, g, r, a, m) {
            i["GoogleAnalyticsObject"] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga");

        ga("create", "UA-76460731-1", "auto");
        ga("send", "pageview");`
      }
    </script>
  </Head>
)

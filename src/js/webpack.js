
/* HTML */
require('file-loader?{ "name": "index.html" }!pug-html-loader!../html/index.pug');

/* CSS */
require('file-loader?{ "name": "bundle.css" }!postcss-loader!../css/index.sss');

/* IMG */
require('../img/portfolio-ndc-800x600.png');
require('../img/portfolio-carmachia-800x600.png');

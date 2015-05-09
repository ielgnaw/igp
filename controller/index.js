var bodyParser = require('body-parser');

exports.init = function (app) {
    // for parsing application/json
    app.use(bodyParser.json());

    // for parsing application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));
    console.warn('test init');
    // // for parsing application/json
    // app.use(bodyParser.json());

    // // for parsing application/x-www-form-urlencoded
    // app.use(bodyParser.urlencoded({ extended: true }));

    exports.routeNav(app);
    exports.routeRequireConfig(app);
    // exports.routeCwd(app);
    // exports.routeLS(app);
    // exports.routeCat(app);
};

exports.routeNav = function (app) {

    var navData = [
        {
            name: 'aaa',
            path: 'http://www.baidu.com'
        },
        {
            name: 'bbb',
            path: 'http://www.baidu.com'
        },
        {
            name: 'ccc',
            path: 'http://www.baidu.com'
        }
    ];

    var content = 'var NAV = ' + JSON.stringify(navData) + ';';

    app.get('/nav.js', function (request, response) {
        response.setHeader('Content-Type', 'text/javascript; charset=UTF-8');
        response.end(content);
    });
};

exports.routeRequireConfig = function (app) {
    var config = {
        baseUrl: './src',
        packages: [
            {
                name: 'etpl',
                location: '../dep/etpl'
            }
        ]
    };
    var configStr = 'require.config(' + JSON.stringify(config) + ');';
    console.warn(configStr);
    app.get('/require.config.js', function (request, response) {
        response.setHeader('Content-Type', 'text/javascript; charset=UTF-8');
        response.end(configStr);
    });
};

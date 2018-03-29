'use strict';

var _caporal = require('caporal');

var _caporal2 = _interopRequireDefault(_caporal);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _scrapeIt = require('scrape-it');

var _scrapeIt2 = _interopRequireDefault(_scrapeIt);

var _pageres = require('pageres');

var _pageres2 = _interopRequireDefault(_pageres);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_caporal2.default.version('1.0.0').description('CLI Challenge')

/**
* #1 String Transformation
*/
.command('lowercase', 'String Transformation - lowercase').argument('input', "text to lowercase").action(function (args, options, logger) {
    logger.info('lowercase');
    logger.info(args);
    var output = args.input.toLowerCase();
    return console.log("output: " + output);
}).command('uppercase', 'String Transformation - uppercase').argument('input', "text to uppercase").action(function (args, options, logger) {
    logger.info('uppercase');
    logger.info(args);
    var output = args.input.toUpperCase();
    return console.log("output: " + output);
}).command('capitalize', 'String Transformation - capitalize').argument('input', "text to capitalize").action(function (args, options, logger) {
    logger.info('capitalize');
    logger.info(args);
    var output = args.input.toLowerCase().split(' ').map(function (word) {
        if (word.length > 1) return word[0].toUpperCase() + word.substr(1);else return word.toUpperCase();
    }).join(' ');
    return console.log("output: " + output);
})

/**
* #2 Arithmetic WIP
*/
.command('add', 'Arithmetic - add').argument('[input]', "numbers to add", _caporal2.default.LIST).action(function (args, options, logger) {
    logger.info('add');
    logger.info(args);
    // let output = args.input.toUpperCase() return console.log("output: "+output)
})

/**
* #3 Palindrome
*/
.command('palindrome', 'Palindrome').argument('input', "text to check").action(function (args, options, logger) {
    logger.info('palindrome');
    logger.info(args);
    var output = args.input.split('').reverse().join('');
    logger.info("output: " + output);
    return args.input.toLowerCase() === output.toLowerCase() ? console.log('Is palindrome? Yes') : console.log('Is palindrome? No');
})

/**
* #4 Obfuscator
*/
.command('obfuscate', 'Replace char into ascii counterpart').argument('input', "text to obfuscate").action(function (args, options, logger) {
    logger.info('obfuscate');
    logger.info(args);
    var output = args.input.split('').map(function (char) {
        return '&#' + char.charCodeAt(0) + ';';
    }).join('');
    return console.log("output: " + output);
})

/**
* #5 Random String
*/
.command('random', 'Generate random alphanumeric').option('--length', 'length of string', _caporal2.default.INT, 32).option('--letters <bool>', 'allow letters or not', _caporal2.default.BOOLEAN, true).option('--numbers <bool>', 'allow numbers or not', _caporal2.default.BOOLEAN, true).option('--uppercase', 'All lettters uppercased', _caporal2.default.BOOLEAN, false).option('--lowercase', 'All letters lowercased', _caporal2.default.BOOLEAN, false).action(function (args, options, logger) {
    logger.info('random');

    var length = options.length;

    logger.info(options);

    var possible = '';

    if (options.letters == true) {
        possible = 'ABCDEFGHIJKLMNOPQRSTUVWXyZabcdefghijklmnopqrstuvwxyz';
    }
    if (options.numbers == true) {
        possible += '0123456789';
    }

    var output = '';

    for (var i = 0; i < length; i++) {
        output += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    if (options.uppercase) {
        output = output.toUpperCase();
    }

    if (options.lowercase) {
        output = output.toLowerCase();
    }

    return console.log("output: " + output);
})

/**
* #6 Get IP Address in private network
*/
.command('ip', 'Get private network ip').action(function (args, options, logger) {
    logger.info('private ip');
    var interfaces = _os2.default.networkInterfaces();

    for (var devName in interfaces) {
        var iface = interfaces[devName];

        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return console.log("output: " + alias.address);
            }
        }
    }

    return console.log("output: 0.0.0.0");
})

/**
 * #7 Get External IP Address
 */
.command('ip-external', 'Get public ip').action(function (args, options, logger) {
    logger.info('public ip');

    _http2.default.get({
        'host': 'api.ipify.org',
        'port': 80,
        'path': '/'
    }, function (res) {
        res.on('data', function (ip) {
            return console.log("output: " + ip);
        });
    });
})

/**
 * #8 Get headlines from kompas.com
 */
.command('headlines', 'Get headlines from kompas').action(function (args, options, logger) {
    logger.info('headlines');

    (0, _scrapeIt2.default)('https://www.kompas.com', {
        headlines: {
            listItem: '.headline__thumb__item',
            data: {
                title: '.headline__thumb__title',
                url: { selector: 'a', attr: 'href' }
            }
        }
    }).then(function (_ref) {
        var data = _ref.data,
            res = _ref.res;

        // console.log(data)
        data.headlines.forEach(function (item) {
            console.log('Title: ' + item.title + '\nURL: ' + item.url + '\n\n');
        });
    }).catch(function (err) {
        console.log(err);
    });
})

/**
 * #9 Import/Export CSV/XLS/XLSX file
 */
.command('convert', 'Convert csv / xls / xlsx file').argument('<filein>', 'File input').argument('<fileout', 'File output').action(function (args, options, logger) {
    logger.info('Convert');

    logger.info(args);
})

/**
 * #10 Get a screenshot from a URL
 */
.command('screenshot', 'Get screenshot from url').argument('<url>', 'url').option('--format <format>', 'image format', _caporal2.default.STRING, 'png').action(function (args, options, logger) {
    logger.info('screenshot');

    logger.info(args);
    var pageres = new _pageres2.default();
    pageres.src(args.url, ['1920x1080']).dest('./screenshot').run().then(function () {
        console.log('screenshot taken');
    });
});

/**
 * #11 Get screenshots from a list of file
 */

/**
 * #12 Get all information about new movies in theaters for today from 21Cineplex nowplaying
 */

_caporal2.default.parse(process.argv);

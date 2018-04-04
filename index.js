import prog from 'caporal'
import os from 'os'
import http from 'http'
import scrapeIt from 'scrape-it'
import Pageres from 'pageres'

prog
    .version('1.0.0')
    .description('CLI Challenge')

    /**
 * #1 String Transformation
 */
    .command('lowercase', 'String Transformation - lowercase')
    .argument('input', "text to lowercase")
    .action((args, options, logger) => {
        logger.info('lowercase')
        logger.info(args)
        let output = args
            .input
            .toLowerCase()
        return console.log("output: " + output)
    })
    .command('uppercase', 'String Transformation - uppercase')
    .argument('input', "text to uppercase")
    .action((args, options, logger) => {
        logger.info('uppercase')
        logger.info(args)
        let output = args
            .input
            .toUpperCase()
        return console.log("output: " + output)
    })
    .command('capitalize', 'String Transformation - capitalize')
    .argument('input', "text to capitalize")
    .action((args, options, logger) => {
        logger.info('capitalize')
        logger.info(args)
        let output = args
            .input
            .toLowerCase()
            .split(' ')
            .map(word => {
                if (word.length > 1) 
                    return word[0].toUpperCase() + word.substr(1)
                else 
                    return word.toUpperCase()
            })
            .join(' ')
        return console.log("output: " + output)
    })

    /**
     * TODO: flexible arguments?
 * #2 Arithmetic (WIP)
 */
    .command('add', 'Arithmetic - add')
    .argument('[input]', "numbers to add", prog.LIST)
    .action((args, options, logger) => {
        logger.info('add')
        logger.info(args)
        // let output = args.input.toUpperCase() return console.log("output: "+output)
    })

    /**
 * #3 Palindrome
 */
    .command('palindrome', 'Palindrome')
    .argument('input', "text to check")
    .action((args, options, logger) => {
        logger.info('palindrome')
        logger.info(args)
        let output = args
            .input
            .split('')
            .reverse()
            .join('')
        logger.info("output: " + output)
        return args
            .input
            .toLowerCase() === output.toLowerCase()
            ? console.log('Is palindrome? Yes')
            : console.log('Is palindrome? No')
    })

    /**
 * #4 Obfuscator
 */
    .command('obfuscate', 'Replace char into ascii counterpart')
    .argument('input', "text to obfuscate")
    .action((args, options, logger) => {
        logger.info('obfuscate')
        logger.info(args)
        let output = args
            .input
            .split('')
            .map(char => {
                return '&#' + char.charCodeAt(0) + ';'
            })
            .join('')
        return console.log("output: " + output)
    })

    /**
 * #5 Random String
 */
    .command('random', 'Generate random alphanumeric')
    .option('--length', 'length of string', prog.INT, 32)
    .option('--letters <bool>', 'allow letters or not', prog.BOOLEAN, true)
    .option('--numbers <bool>', 'allow numbers or not', prog.BOOLEAN, true)
    .option('--uppercase', 'All lettters uppercased', prog.BOOLEAN, false)
    .option('--lowercase', 'All letters lowercased', prog.BOOLEAN, false)
    .action((args, options, logger) => {
        logger.info('random')

        let length = options.length

        logger.info(options)

        let possible = ''

        if (options.letters == true) {
            possible = 'ABCDEFGHIJKLMNOPQRSTUVWXyZabcdefghijklmnopqrstuvwxyz'
        }
        if (options.numbers == true) {
            possible += '0123456789'
        }

        let output = ''

        for (let i = 0; i < length; i++) {
            output += possible.charAt(Math.floor(Math.random() * possible.length))
        }

        if (options.uppercase) {
            output = output.toUpperCase()
        }

        if (options.lowercase) {
            output = output.toLowerCase()
        }

        return console.log("output: " + output)
    })

    /**
 * #6 Get IP Address in private network
 */
    .command('ip', 'Get private network ip')
    .action((args, options, logger) => {
        logger.info('private ip')
        let interfaces = os.networkInterfaces()

        for (let devName in interfaces) {
            let iface = interfaces[devName]

            for (let i = 0; i < iface.length; i++) {
                let alias = iface[i]
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    return console.log("output: " + alias.address)
                }
            }
        }

        return console.log("output: 0.0.0.0")
    })

    /**
     * #7 Get External IP Address
     */
    .command('ip-external', 'Get public ip')
    .action((args, options, logger) => {
        logger.info('public ip')

        
        http.get({
            'host': 'api.ipify.org',
            'port': 80,
            'path': '/'
        }, res => {
            res.on('data', ip => {
                return console.log("output: " + ip)
            })
        }).on("error", err=>{
            return console.log("Unable to connect to the internet.")
        })
    })

    /**
     * #8 Get headlines from kompas.com
     */
    .command('headlines', 'Get headlines from kompas')
    .action((args, options, logger) => {
        logger.info('headlines')

        scrapeIt('https://www.kompas.com', {
            headlines: {
                listItem: '.headline__thumb__item',
                data: {
                    title: '.headline__thumb__title',
                    url: {
                        selector: 'a',
                        attr: 'href'
                    }
                }
            }
        }).then(({data, res}) => {
            // console.log(data)
            data
                .headlines
                .forEach(item => {
                    console.log(`Title: ${item.title}\nURL: ${item.url}\n\n`)
                })
        }).catch(err => {
            console.log(err)
        })
    })

    /**
     * #9 Import/Export CSV/XLS/XLSX file
     */
    .command('convert', 'Convert csv / xls / xlsx file')
    .argument('<filein>', 'File input')
    .argument('<fileout', 'File output')
    .action((args, options, logger) => {
        logger.info('Convert')

        logger.info(args)
    })

    /**
      * #10 Get a screenshot from a URL
      */
    .command('screenshot', 'Get screenshot from url')
    .argument('<url>', 'url')
    .option('--format <format>', 'image format', prog.STRING, 'png')
    .action((args, options, logger) => {
        logger.info('screenshot')

        logger.info(args)
        let pageres = new Pageres()
        pageres
            .src(args.url, ['1920x1080'])
            .dest('./screenshot')
            .run()
            .then(() => {
                console.log('screenshot taken')
            })
    })

/**
       * #11 Get screenshots from a list of file
       */

/**
        * #12 Get all information about new movies in theaters for today from 21Cineplex nowplaying
        */

prog.parse(process.argv);

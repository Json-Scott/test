const Router = require('koa-router')
const requireDirectory = require('require-directory')
class InitMannager {
    static initCore(app) {
        // 入口方法
        InitMannager.app = app
        InitMannager.initLoadRouters()
        InitMannager.loadHttpException()
        InitMannager.loadConfig()
    }

    static initLoadRouters() {
        requireDirectory(module, '../app/api', {
            visit: whenLoadModule
        })

        function whenLoadModule(obj) {
            if (obj instanceof Router) {
                InitMannager.app.use(obj.routes())
            }
        }
    }

    static loadHttpException() {
        const errors = require('./http-exception.js')
        global.errs = errors
    }

    static loadConfig(path='') {
        const configPath = path || process.cwd() + '/config/config.js'
        const config = require(configPath)
        global.config = config
    }
}

module.exports = InitMannager
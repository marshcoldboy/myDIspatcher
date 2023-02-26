process.env.NODE_ENV = 'development'

import { spawn } from "child_process"
import { createServer, build } from "vite"
import electron from 'electron'
import Chalk from 'chalk'

let rendererServer = null
let electronProcess = null
let rendererPort = 0

async function startRendererServer() {
  console.log(Chalk.greenBright('正在启动渲染进程...'))
  rendererServer = await createServer({
    configFile: 'renderer/vite.config.ts',
    mode: 'development'
  })
  rendererPort = (await rendererServer.listen()).config.server.port
  console.log(Chalk.greenBright('渲染进程已启动'))
  return Promise.resolve('renderer server: ok')
}

async function startMainServer() {
  console.log(Chalk.greenBright('正在启动主进程...'))
  build({
    configFile: 'main/vite.config.ts',
    mode: 'development',
    build: {
      watch: {}
    },
    plugins: [
      {
        // 每次编写主进程模块都重新编译
        writeBundle() {
          if (electronProcess) {
            electronProcess.removeListener('exit', stopServe)
            electronProcess.kill()
            electronProcess = null
            console.log(Chalk.greenBright('主进程重启成功, 端口: ', rendererPort))
          } else {
            console.log(Chalk.greenBright('主进程启动成功, 端口: ', rendererPort))
          }
          electronProcess = spawn(
            electron, ['.', rendererPort],
            { stdio: 'inherit' }
          )
          electronProcess.on('exit', stopServe)
        }
      }
    ]
  })
}

export function stopServe() {
  rendererServer.close()
  process.exit()
}

async function serve() {
  console.log(Chalk.greenBright('Electron + Vite 服务启动中...'))
  await startRendererServer()
  startMainServer()
}

serve()
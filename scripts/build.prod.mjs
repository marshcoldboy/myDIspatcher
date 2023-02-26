import { build } from "vite"
import Chalk from 'chalk'

function buildRenderer() {
  return build({
    configFile: 'renderer/vite.config.ts',
    base: './',
    mode: 'production'
  })
}

function buildMain() {
  return build({
    configFile: 'main/vite.config.ts',
    mode: 'production'
  })
}

Promise.allSettled([
  buildRenderer(),
  buildMain()
]).then(() => {
  console.log(Chalk.greenBright('渲染进程及主进程代码打包完成，接下来由electron提供的打包器接管'))
})
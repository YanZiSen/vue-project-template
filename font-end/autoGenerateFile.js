const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const resolve = file => path.resolve(__dirname, './src', file)
const RouterSymbol = Symbol('router'),
            ViewSymbol = Symbol('views')
const rootPath = {
  [RouterSymbol]: resolve('router/modules'),
  [ViewSymbol]: resolve('views')
}

const errorLog = error => console.log(chalk.red(`${error}`))
const defaultLog = log => console.log(chalk.green(`${log}`))

let moduleName = new String()
let fileType = new String()

const routerFile = module => (`// write your comment here...
export default [
  {
    path: '/${module}',
    name: '',
    redirect: '/${module}',
    component: () => import('@/views/frame/Frame'),
    children: [{
      path: '',
      fullPath: '',
      name: '',
      component: () => import('@/views/${module}/index')
    }]
  }
]
`)
const vueFile = module => (`<template>

</template>
<script >
export default {
  name: '${module}',
  data () {
    return {
    
    }
  },
  methods: {
  
  },
  created() {
  
  }
}
</script>

<style lang='stylus'>

</style>
`)

/**
 * generate file
 * @param {*} filePath
 * @param {*} content
 * @param {*} dirPath
 */

const generateFile = async (filePath, content, dirPath = '') => {
  try {
    if (dirPath !== '' && ! await fs.existsSync(dirPath)) {
      await fs.mkdirSync(dirPath)
      defaultLog(`created ${dirPath}`)
    }
    if (! await fs.existsSync(filePath)) {
      await fs.openSync(filePath, 'w')
      defaultLog(`created ${filePath}`)
    }
    await fs.writeFileSync(filePath, content, 'utf8')
  } catch (e) {
    errorLog(e)
  }
}

const generates = new Map([
  ['view', async (module) => {
    const filePath = path.join(rootPath[ViewSymbol], module)
    const vuePath = path.join(filePath, '/index.vue')
    await generateFile(vuePath, vueFile(module), filePath)
  }],
  ['router', async (module) => {
    const routerPath = path.join(rootPath[RouterSymbol], `/${module}.js`)
    await generateFile(routerPath, routerFile(module))
  }]
])

defaultLog(`请输入模块名称(英文)：`)
const files = ['view', 'router']

// 和命令行进行交互 获取的模块名称
process.stdin.on('data', (chunk) => {
  try {
    defaultLog(path.resolve(__dirname, './src', 'views/test'))
    if (!moduleName) {
      moduleName = chunk
    } else {
      chunk = chunk.slice(0, -2)
      defaultLog(`new module name is ${chunk}`)
      files.forEach(async (el, index) => {
        await generates.get(`${el}`).call(null, chunk.toString())
        if (index === files.length - 1) {
          process.stdin.emit('end')
        }
      })
    }
  } catch (error) {
    errorLog(error)
  }
})
 process.stdin.on('end', () => {
   defaultLog('create module success')
 })


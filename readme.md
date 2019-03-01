## 项目启动
  cd back-end 运行 npm install && npm run start
  cd font-end 运行 npm install && npm run dev

  npm run dev 开发环境
  npm run test 测试环境
  npm run build 生产环境

## 开发规范在这写
  常量名大写
  ui class 带下划线
  不要再Vue.prototype上扩展，应该import或者 extends Vue
  尽量不要在vue中操纵dom, 例如用jquery, 能在数据层解决就在数据层解决
  单文件组件, 一个文件只包含一个.vue文件
  prop 一定要校验合法性，除非无关紧要的信息
  ...

## 代理配置
  font-end/config/proxy.js 更改ip地址为接口地址
  * 打开调试模式, 没有打印就是路径没有匹配上
      <pre>
        proxy: {
            '/api/**' : {
              target: ip,
              changeOrigin: true,
              pathRewrite: {

              },
              logLevel: 'debug' // 打开调试模式
            },
          }
      </pre>
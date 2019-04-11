<template>
  <div id="app">
    <router-view @loginin="loginin"/>
  </div>
</template>

<script>
import Vue from 'vue'
import dataProvider from '@/data-provider'
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {}
  },
  created () {
    this.checkSignin()
  },
  methods: {
    checkSignin () {
      console.log(document.cookie)
      const isSign = document.cookie
      if (isSign) {
        this.setPermision()
      } else {
        this.$router.push({
          path: '/login',
          query: this.$router.currentRoute.path
        })
      }
    },
    getResourcePermission (data) {
      let resourcePermission = {}
      if (Array.isArray(data)) {
        data.forEach(item => {
          resourcePermission[item.method + ',' + item.url] = true
        })
      }
      return resourcePermission
    },
    setInterceptor (resourcePermission) {
      axios.interceptors.request.use(config => {
        let perName = config.url.replace(config.baseURL, '').split('?')[0]
        // let regResult = perName.match(/^(\/[^\/]+\/)[^\/]+$/) this just can match /admin/see can't match /admin/see/all
        if (!resourcePermission[config.method.toLowerCase() + ',' + perName]) {
          this.$message({
            message: '无访问权限，请联系管理员',
            type: 'warn'
          })
          return Promise.reject({
            message: 'no permission'
          })
        }
        return config
      })
    },
    async getUserRouter () {
      let {code, data} = await dataProvider.getUserRouter()
      if (code === 200) {
        this.$store.commit('router/setRouters', data.menuData)
        let resourcePermission = this.getResourcePermission(data.resourceData)
        this.setInterceptor(resourcePermission)
        this.$router.replace({path: '/main/index'})
        Vue.prototype.$_has = function (permissionArray) {
          let permission = true
          let resourceList = []
          if (Array.isArray(permissionArray)) {
            permissionArray.forEach(permission => {
              if (permission && permission.p) {
                resourceList.concat(permission.p)
              }
            })
          } else {
            if (permissionArray && permissionArray.p) {
              resourceList = permissionArray.p
            }
          }
          for (let resouce of resourceList) {
            if (!resourcePermission[resouce]) {
              permission = false
            }
          }
          return permission
        }
      }
    },
    setPermision () {
      this.getUserRouter()
    },
    loginin () {
      this.setPermision()
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  background-color: #efefef;
  height: 100%
}
</style>

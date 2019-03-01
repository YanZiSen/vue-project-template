<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <div class="mark-box">
        获取信息: {{userInfo}}
      </div>
      <UiButton @click.native="updateInfo()">更新信息</UiButton>
    </div>
  </template>

  <script>
    import UiButton from '@/common-components/ui-button'
    import dataProvider from '@/data-provider'
    export default {
      name: 'index',
      data () {
        return {
          msg: 'Welcome to Your Vue.js App',
          userInfo: ''
        }
      },
      mounted () {
        this.getInfo()
      },
      components: {UiButton},
      methods: {
        getInfo () {
          dataProvider.getInfo().then(res=>{
            this.userInfo = res
          })
        },
        updateInfo () {
          dataProvider.setInfo().then(res=>{
            this.userInfo = res
          })
        }
      }
    }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .mark-box {
    line-height: 40px;
  }
</style>

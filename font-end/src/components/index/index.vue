<template>
    <div class="hello">
      <nav class="nav-bar">
        <ul class="nav-bar-w">
          <router-link tag="li" v-for="item in routers" :to="item.router" :key="item.id" class="nav-item">{{item.content}}</router-link>
        </ul>
      </nav>
      <div class="content">
        <router-view></router-view>
      </div>
      <!--<h1>{{ msg }}</h1>-->
      <!--<div class="mark-box">-->
        <!--获取信息: {{userInfo}}-->
      <!--</div>-->
      <!--<UiButton @click.native="updateInfo()">更新信息</UiButton>-->
    </div>
  </template>

<script>
import UiButton from '@/common-components/ui-button'
import dataProvider from '@/data-provider'
import {mapGetters} from 'vuex'
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
  computed: {
    ...mapGetters('router', {
      routers: 'ROUTERS'
    })
  },
  components: {UiButton},
  methods: {
    getInfo () {
      dataProvider.getInfo().then(res => {
        this.userInfo = res
      })
    },
    updateInfo () {
      dataProvider.setInfo().then(res => {
        this.userInfo = res
      })
    }
  }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.nav-bar
  line-height 60px
  background-color #333
  .nav-bar-w
    text-align left
    width 1200px
    margin 0 auto
    .nav-item
      display inline-block
      padding 0 20px
      text-align center
      color #eee
</style>

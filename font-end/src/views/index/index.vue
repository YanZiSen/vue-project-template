<template>
  <div class="nest-second">
    <div class="slide-bar">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#333"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item :index="index.toString()" v-for="(routerElem, index) in indexRouter.children" :key="index">
          <i class="el-icon-menu"></i>
          <router-link :to="routerElem.fullPath">{{routerElem.content}}</router-link>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <!--<span v-for="(routerElem, index) in indexRouter.children" :key="index">{{routerElem.content}}</span>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  computed: {
    ...mapGetters('router', {
      routers: 'ROUTERS'
    })
  },
  created () {
    this.indexRouter = this.routers.children.find(item => item.name === 'index')
  },
  data () {
    return {
      indexRouter: {}
    }
  }
}
</script>

<style lang="stylus">
  .nest-second
    &:after
      display block
      content ''
      clear both
    .slide-bar
      width 210px
      float left
      height 100%
    .content
      float left
      padding 20px
      width calc(100% - 210px)
</style>

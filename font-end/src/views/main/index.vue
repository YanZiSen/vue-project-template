<template>
    <div class="hello">
      <nav class="nav-bar">
        <ul class="nav-bar-w">
          <router-link tag="li" v-for="item in routers.children" :to="item.fullPath" :key="item.id" class="nav-item" active-class="active">{{item.content}}</router-link>
        </ul>
      </nav>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </template>

<script>
import UiButton from '@/components/ui-button'
// import dataProvider from '@/data-provider'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'index',
  data () {
    return {}
  },
  mounted () {
    // this.getUserRouter()
  },
  computed: {
    ...mapGetters('router', {
      routers: 'ROUTERS'
    })
  },
  components: {UiButton},
  methods: {
    ...mapActions('router', ['getUserRouter'])
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
      cursor pointer
      &.active
        background-color #aaa
.content
  width 1200px
  margin 0 auto
</style>

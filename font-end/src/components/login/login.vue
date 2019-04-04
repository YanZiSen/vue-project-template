<template>
  <el-form class="login-box" :model="form" label-width="80px" width="800px">
    <el-form-item label="用户名">
      <el-input v-model="form.username" placeholder="请输入内容"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.userpwd" placeholder="请选择活动区域"></el-input>
    </el-form-item>
    <el-button @click="submit" type="primary">注册</el-button>
  </el-form>
</template>

<script>
import UiButton from '@/common-components/ui-button'
import dataProvider from '@/data-provider'
import { mapMutations } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      form: {
        username: '',
        userpwd: ''
      }
    }
  },
  components: {UiButton},
  methods: {
    ...mapMutations('router', ['setRouters']),
    submit () {
      dataProvider.registerUser({
        username: this.username,
        userpwd: this.userpwd
      }).then(res => {
        if (res.code === 200) {
          this.$router.push({
            name: 'index'
          })
          console.log('res.data', res.data, this.$store)
          this.setRouters(res.data)
        }
      }).catch(e => {

      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .login-box
    margin 0 auto
    margin-top 30px
    width 800px
</style>

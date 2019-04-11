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
import dataProvider from '@/data-provider'
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
  methods: {
    submit () {
      dataProvider.registerUser({
        username: this.username,
        userpwd: this.userpwd
      }).then(res => {
        if (res.code === 200) {
          this.$emit('loginin')
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
    padding-top 30px
    width 800px
</style>

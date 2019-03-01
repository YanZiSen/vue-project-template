<template>
  <div>
    <p>
      <label for="">用户名</label>
      <input type="text" v-model="username" name="username">
    </p>
    <p>
      <label for="">密码</label>
      <input type="text" v-model="userpwd" name="userpwd">
    </p>
    <UiButton @click.native="submit">注册</UiButton>
  </div>
</template>

<script>
  import UiButton from '@/common-components/ui-button'
  import dataProvider from '@/data-provider'
  export default {
    name: 'login',
    data () {
      return {
        username: '',
        userpwd: ''
      }
    },
    components: {UiButton},
    methods: {
      submit () {
        dataProvider.registerUser({
          username: this.username,
          userpwd: this.userpwd
        }).then(res => {
          if (200 === res.code) {
            this.$router.push({
              name: 'index'
            })
          }
        }).catch( e =>{

        })
      }
    }
  }
</script>

<style scoped>

</style>

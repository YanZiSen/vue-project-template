<template>
  <div>
    <p>菜单3</p>
    <el-button v-has="userData.request">查看</el-button>
    <el-button v-has="userData.deleteUrl">删除</el-button>
  </div>
</template>
<script >
import userData from '@/data-provider/user'
export default {
  name: 'indexcaidan3',
  data () {
    return {
      userData: userData
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

<template>
  <div>
    <p>菜单1</p>
    <el-button @click="getData()">非法获取数据</el-button>
  </div>
</template>
<script >
import axios from 'axios'
export default {
  name: 'indexcaidan1',
  data () {
    return {

    }
  },
  methods: {
    getData () {
      axios.get('/student/aa').then(res => {
        console.log(res)
      })
    }
  },
  created () {

  }
}
</script>

<style lang='stylus'>

</style>

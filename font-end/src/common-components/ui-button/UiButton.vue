<template>
  <div class="_ui_button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'UiButton'
}
</script>

<style scoped lang="stylus">
  $blue = #afa
._ui_button
  background-color $blue
  color #fff
  padding 0 10px
  border-radius 3px
  line-height 30px
  text-align center
  display inline-block
  cursor pointer
  &:hover
    background-color darken($blue, 20%)
</style>

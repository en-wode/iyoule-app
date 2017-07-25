<template lang="html">
  <div class="bottom" >
    <router-link to="/home" tag="li" exact>
      <i class="icon-bookshelf"></i>
      <span>书架</span>
    </router-link>
    <router-link to="/bookcity" tag="li">
      <i class="icon-book-city"></i>
      <span>书城</span>
    </router-link>
    <router-link to="/topic" tag="li">
      <i class="icon-direction"></i>
      <span>专题</span>
    </router-link>
   </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .bottom
    position fixed
    left 0
    bottom 0
    height 48px
    width 100%
    box-shadow 0px -4px 2px rgb(230,230,230)
    display flex
    background white
    z-index 99
    li
      float left
      flex 1
      height 48px
      text-align center
      i
        font-size 32px
        display inline-block
      span
        display block
        font-size 12px


</style>

<script type="text/ecmascript-6">
    export default{
    }
</script>

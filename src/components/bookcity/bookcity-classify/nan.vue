<template lang="html">
    <div class="nan">
      <div class="list">
        <mt-swipe :auto="4000">
          <mt-swipe-item>1</mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="classify_detail">
        <ul>
          <router-link to="/bookcity-classify/nan" tag="li">玄幻</router-link>
          <router-link to="/bookcity-classify/nv" tag="li" >都市</router-link>
          <router-link to="/home" tag="li" >灵异</router-link>
          <router-link to="/home" tag="li">历史</router-link>
          <router-link to="/home" tag="li">仙侠</router-link>
        </ul>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .list
    width 100%
    height 120px
  .classify_detail
    width 100%
    border-bottom 8px solid #f5f0f0
    ul
      width 90%
      margin 24px auto
      display flex
      height 45px
      li
        color #998282!important
        flex 1
        text-align center
        width 67px
        line-height 45px
        margin-right 20px


</style>

<script type="text/ecmascript-6">
    export default{

    }
</script>

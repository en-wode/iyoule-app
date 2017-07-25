<template lang="html">
    <div class="header">
      <ul>
        <li>首页</li>
        <li>男频</li>
        <li>女频</li>
        <li>免费</li>
        <li>分类</li>
        <li class="search">
          <span class="icon-search"></span>
        </li>
      </ul>
      <div class="search">
      </div>
    </div>
  <!--<mt-header fixed >
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>-->
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .header
    height 55px
    background #2e2727
    ul
      width 100%
      display flex
      li
        float left
        color white
        font-size 16px
        flex 1
        line-height 55px
        text-align center
      .search
        flex 0 0 50px
        font-size 32px
        vertical-align 2px


</style>

<script type="text/ecmascript-6">
    export default{
    }
</script>

<template lang="html">
    <div class="catalog">
      <ul>
        <li @click="$router.push({path:'/bookread'})"><span>•</span>第一张 将上官玉送人</li>
        <li><span>•</span>第一张 将上官玉送人</li>
        <li><span>•</span>第一张 将上官玉送人</li>
        <li><span>•</span>第一张 将上官玉送人</li>
        <li><span>•</span>第一张 将上官玉送人</li>
        <li><span>•</span>第一张 将上官玉送人</li>
        <li><span>•</span>第一张 将上官玉送人</li>
        <li><span>•</span>第一章 将上官玉送人</li>
        <li><span>•</span>第一张 将上官玉送人</li>
        <li><span>•</span>第一章 将上官玉送人</li>
        <li><span>•</span>第一章 将上官玉送人</li>
        <li><span>•</span>第一章 将上官玉送人</li>
        <li><span>•</span>第一章 将上官玉送人</li>
        <li><span>•</span>第一章 将上官玉送人</li>
        <li><span>•</span>第一章 将上官玉送人</li>
        <li><span>•</span>第一章 将上官玉送人</li>
      </ul>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .catalog
    width 100%
    li
      margin 0 auto
      border-1px(rgba(245,240,240,0.9))
      line-height 45px
      padding: 0 20px;
      &:hover
        background-color #f0f0f0
      span
        color #e6dada
        margin-right 10px
</style>
<script type="text/ecmascript-6">
  export default{
  }
</script>

<template lang="html">
    <div class="ys">
      <div class="border_bottom">
        <div class="topic">
          <img src="../../components/topic/top_1.png" alt="" width="100%" height="100">
          <h2>一起成功：不仅有颜值还有才气</h2>
          <p>一起成功：不仅有颜值还有才气一起成功：不仅有颜值还有才气一起成功：不仅有颜值还有才气一起成功：不仅有颜值还有才气一起成功：不仅有颜值还有才气一起成功：不仅有颜值还有才气一起成功：不仅有颜值还有才气</p>
        </div>
      </div>
      <vertical></vertical>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .topic
    width 90%
    margin 0 auto
    padding-bottom 14px
    padding-top 14px
    border-1px(rgba(245,240,240,0.9))
    h2
      padding 14px 0
    p
      color #807979
      font-size 14px

  @media screen and (max-width: 320px)
    .topic
      img
        width 100%
        height 88px
      h2
        font-size 14px
      p
        font-size 12px
</style>

<script type="text/ecmascript-6">
  import vertical from '@/components/vertical-recommend/vertical_recommend'
  export default{
    components: {
      vertical
    }
  }
</script>

<template>
  <div>
    <d-head></d-head>
    <div class="personal">
      <div class="consume">
        <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="82" height="82">
        <p class="lv">黑铁会员</p>
      </div>
      <div class="border_bottom consume">
        <h3>当前等级福利</h3>
        <div class="contain">鲜花</div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import detail from '../../components/home-header/detail-header.vue'
  export default {
    components: {
      'd-head': detail
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .personal
    margin-top 56px
    width  100%
    left 0
    overflow hidden
    background #fffefd
    z-index 100
    .consume
      width 100%
      img
        display block
        margin 18px auto 12px auto
        border-radius 50%
      .lv
        width 100%
        text-align center
        margin-bottom 24px
      h3
        width 90%
        line-height 28px
        margin 0 auto
        border-1px(rgba(245,240,240,0.9))

</style>

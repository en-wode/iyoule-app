<template>
  <div>
    <d-head></d-head>
    <div class="personal">
      <textarea ></textarea>
      <div class="contact">
        QQ <input type="text">
        手机 <input type="text">
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
    textarea
      resize:none
      border none
      margin 24px auto
      width 316px
      height 160px
      background #f5f0f0
      display block
      padding 9px 14px
    .contact
      width 90%
      margin 0 auto
      padding 4px 0
      border-1px(rgba(245,240,240,0.9))
      input
        width 132px
        height 26px
</style>

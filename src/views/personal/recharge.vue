<template>
  <div>
    <d-head></d-head>
    <div class="personal">
      <div class="border_bottom consume">
        <p><i class="icon-deposit"></i>余额：1000有乐币</p>
      </div>
      <div class="border_bottom consume">
        <p><i class="icon-lv"></i>我的等级<i class="icon-arrow"></i></p>
        <p><i class="icon-VIP"></i>vip等级<i class="icon-arrow"></i></p>
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
      p
        width 90%
        margin 0 auto
        height 42px
        line-height 42px
        border-1px(rgba(245,240,240,0.9))
        i
          font-size 28px
          vertical-align: middle

</style>

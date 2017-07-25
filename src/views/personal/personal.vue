<template>
  <div class="back">
    <div class="personal">
      <div class="head border_bottom" >
        <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="82" height="82" @click="$router.push({path:'/profile',query:{bang:'proflie'}})">
        <div class="level">
          <span class="fl">黑铁会员</span>
          <span class="fr">黑铁会员</span>
        </div>
        <p class="user_name">蹦擦蹦擦蹦擦擦</p>
      </div>
      <div class="border_bottom consume">
        <p @click="$router.push({path:'/recharge',query:{bang:'recharge'}})"><i class="icon-deposit"></i>充值<i class="icon-arrow"></i></p>
        <p><i class="icon-consuming-records"></i>充值/充值记录<i class="icon-arrow"></i></p>
      </div>
      <div class="border_bottom consume">
        <p @click="$router.push({path:'/person_lv',query:{bang:'person_lv'}})"><i class="icon-lv"></i>我的等级<i class="icon-arrow fr"></i></p>
        <p><i class="icon-VIP"></i>vip等级<i class="icon-arrow"></i></p>
      </div>
      <div class="border_bottom consume">
        <p><i class="icon-new"></i>消息中心<i class="icon-arrow"></i></p>
        <p><i class="icon-mybook"></i>我的书籍<i class="icon-arrow"></i></p>
        <p><i class="icon-help"></i>帮助反馈<i class="icon-arrow"></i></p>
        <p><i class="icon-person-data"></i>个人资料<i class="icon-arrow"></i></p>
      </div>
      <div class="consume">
        <p><i class="icon-night"></i>开启夜间模式<i class="icon-set"></i></p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import profile from '../../views/personal/profile.vue'
  export default {
    components: {
      profile
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .back
    width  100%
    position absolute
    top 0
    left 0
    height 100%
    overflow hidden
    background #fffefd
    z-index 100
    background rgba(104,107,110,0.8)
    .personal
      width  80%
      position absolute
      top 0
      left 0
      height 100%
      overflow hidden
      background #fffefd
      z-index 100
      .head
        height 168px
        width 100%
        img
          display block
          margin 18px auto 12px auto
          border-radius 50%
        .level
          width 45%
          margin 0 auto 9px auto
          height 18px
          span
            font-size 12px
            background #2e2727
            color #fffefd
            padding 4px 8px
        .user_name
          text-align center
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

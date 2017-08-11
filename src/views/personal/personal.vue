<template>
  <div class="back" @touchmove.prevent>
    <div class="personal">
      <div class="head border_bottom" >
        <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="82" height="82" @click="$router.push({path:'/profile',query:{bang:'proflie'}})">
        <div hidden>
          <div class="level">
            <span class="fl">vip<img src="../../views/personal/crown.png" alt="" width="12" height="12"></span>
            <span class="fr">黑铁会员</span>
          </div>
          <p class="user_name">蹦擦蹦擦蹦擦擦</p>
        </div>
        <div>
          <a class="login_in" @click="$router.push({path:'/login',query:{bang:'login'}})">点击登录</a>
        </div>
      </div>
      <div class="border_bottom consume">
        <p @click="$router.push({path:'/recharge',query:{bang:'recharge'}})"><i class="icon-deposit"></i>充值 <span class="fr"><i class="icon-arrow"></i></span></p>
        <p @click="$router.push({path:'/czrecords',query:{bang:'czrecords'}})"><i class="icon-consuming-records"></i>充值/充值记录<span class="fr"><i class="icon-arrow"></i></span></p>
      </div>
      <div class="border_bottom consume">
        <p @click="$router.push({path:'/person_lv',query:{bang:'person_lv'}})"><i class="icon-lv"></i>我的等级<span class="fr"><i class="icon-arrow"></i></span></p>
        <p @click="$router.push({path:'/person_vip',query:{bang:'person_vip'}})"><i class="icon-VIP"></i>vip等级<span class="fr"><i class="icon-arrow"></i></span></p>
      </div>
      <div class="border_bottom consume">
        <p @click="$router.push({path:'/person_new',query:{bang:'person_new'}})"><i class="icon-new"></i>消息中心<span class="fr"><i class="icon-arrow"></i></span></p>
        <p @click="$router.push({path:'/person_book',query:{bang:'person_book'}})"><i class="icon-mybook"></i>我的书籍<span class="fr"><i class="icon-arrow"></i></span></p>
        <p @click="$router.push({path:'/feedback',query:{bang:'feedback'}})"><i class="icon-help"></i>帮助反馈<span class="fr"><i class="icon-arrow"></i></span></p>
        <p @click="$router.push({path:'/profile',query:{bang:'proflie'}})"><i class="icon-person-data"></i>个人资料<span class="fr"><i class="icon-arrow"></i></span></p>
      </div>
      <div class="consume">
        <p><i class="icon-night"></i>开启夜间模式<span class="fr" @click="$router.push({path:'/set',query:{bang:'set'}})"><i class="icon-set"></i></span></p>
      </div>
    </div>
    <div class="unperson" @click="pers()"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import profile from '../../views/personal/profile.vue'
  export default {
    components: {
      profile
    },
    methods: {
      pers: function () {
        this.$emit('hide', false)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .back
    width  100%
    position fixed
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
          width 50%
          margin 0 auto 9px auto
          height 18px
          img
            margin: 0;
            float: right;
          span
            border-radius 4px
            text-align center
            width 50px
            font-size 12px
            background #2e2727
            color #fffefd
            padding 5px 8px
        .user_name
          margin-top 10px
          text-align center
        .login_in
          font-size 14px
          border 1px solid #7e8c8d
          padding 4px 8px
          width 56px
          display block
          margin 0 auto
          border-radius 4px
      .consume
        width 100%
        p
          width 90%
          margin 0 auto
          height 42px
          line-height 42px
          border-1px(rgba(245,240,240,0.9))
          i
            font-size 18px
            vertical-align: middle
            margin-right 4px
    .unperson
      width  20%
      position absolute
      top 0
      right  0
      height 100%
      overflow hidden

</style>

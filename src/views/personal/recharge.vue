<template>
  <div>
    <d-head></d-head>
    <div class="personal">
      <div class="border_bottom consume">
        <p><i class="icon-deposit"></i>余额：1000有乐币</p>
      </div>
      <div class="border_bottom consume">
        <div class="zhifu">
          <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="90" height="40" class="fl "  :class="this.qzhifu[0].show? 'kit_red':''" @click="zhifu1(0)">
          <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="90" height="40" @click="zhifu1(1)" :class="this.qzhifu[1].show? 'kit_red':''">
          <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="90" height="40" class="fr" @click="zhifu1(2)" :class="this.qzhifu[2].show? 'kit_red':''">
        </div>
      </div>
      <div class="consume">
        <div class="zhifu">
          <ul class="clearfix">
            <li @click="zhifu2(0)" :class="this.qzhifutotal[0].showtotal? 'kit_red':''">100有乐币</li>
            <li @click="zhifu2(1)" :class="this.qzhifutotal[1].showtotal? 'kit_red':''">500有乐币</li>
            <li @click="zhifu2(2)" :class="this.qzhifutotal[2].showtotal? 'kit_red':''" >1000有乐币</li>
            <li @click="zhifu2(3)" :class="this.qzhifutotal[3].showtotal? 'kit_red':''">5000有乐币</li>
            <li @click="zhifu2(4)" :class="this.qzhifutotal[4].showtotal? 'kit_red':''">10000有乐币</li>
            <li :class="this.qzhifutotal[5].showtotal? 'kit_red':''" @click="zhifu2(5)"><input type="text" value="" placeholder="其他"></li>
          </ul>
          <p><i class="icon-deposit"></i><span class="red">100</span>元 = <span class="red">10000</span>有乐币</p>
          <input type="button" value="确认充值" class="cz" @click="tip">
        </div>
      </div>
      <div class="warm consume">
        <h3>注：</h3>
        <p>1.如果使用微信充值提示充值失败，请使用支付宝充值。微信支付成功后，请刷新当前页面查看余额。</p>
        <p>2.如果使用微信充值提示充值失败，请使用支付宝充值。微信支付成功后，请刷新当前页面查看余额。</p>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import detail from '../../components/home-header/detail-header.vue'
  import { Toast } from 'mint-ui'
  export default {
    data () {
      return {
        qzhifu: [
          {show: true},
          {show: false},
          {show: false}
        ],
        qzhifutotal: [
          {showtotal: true},
          {showtotal: false},
          {showtotal: false},
          {showtotal: false},
          {showtotal: false},
          {showtotal: false}
        ]
      }
    },
    components: {
      'd-head': detail
    },
    methods: {
      zhifu1: function (fangshi) {
        for (var i = 0; i < this.qzhifu.length; i++) {
          this.qzhifu[i].show = false
        }
        this.qzhifu[fangshi].show = true
      },
      zhifu2: function (total) {
        for (var i = 0; i < this.qzhifutotal.length; i++) {
          this.qzhifutotal[i].showtotal = false
        }
        this.qzhifutotal[total].showtotal = true
      },
      tip () {
        Toast('充值成功')
      }
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
      padding 0 10px
      border-1px(rgba(245,240,240,0.9))
      i
        margin-right 10px
        vertical-align middle
      .zhifu
        padding 0 10px
        margin 0 auto
        text-align center
        img
          margin 25px auto
          border-radius 2px
        p
          text-align left
        .cz
          color white
          background #ff4c4c
          padding 8px 20px
          margin-top 20px
          border-radius  4px
          margin-bottom 24px
      ul
        margin 25px auto 0 auto
        li
          float left
          width 30%
          line-height 40px
          border-radius 2px
          border 1px solid #e7eaf2
          font-size 14px
          margin-right 10px
          margin-bottom 20px
          &:nth-child(3)
            margin-right 0
          &:last-child
            margin-right 0
          input
            width 100%
            height 40px
            text-indent 1em
      p
        width 90%
        margin 0 auto
        height 42px
        line-height 42px
    .warm
      font-size 14px
      margin-top 24px
      margin-bottom 24px
      color #a89595
      h3
        padding 0 10px
      p
        height auto
        line-height 24px
        text-indent 1em

</style>

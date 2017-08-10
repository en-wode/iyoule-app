<template lang="html">
    <div class="qiandao">
      <div class="tishi"></div>
      <div class="qian_total">
        <div class="yiqian qday1"></div>
        <img src="../../views/qiandao/flos.png" alt="" width="40" height="32">
      </div>
      <div class="tian">
        <span>1天</span>
        <span>2天</span>
        <span>3天</span>
        <span>4天</span>
        <span>5天</span>
        <span>6天</span>
        <span>7天</span>
      </div>
      <div class="prize1">
        <ul>
          <li>
            <div>
              <img src="../../views/qiandao/mon.png" alt="" class="day" width="32" height="16">
            </div>
            <img src="../../views/qiandao/wine.png" alt="" class="wine" width="50" height="50">
          </li>
          <li>
            <div>
              <img src="../../views/qiandao/tues.png" alt="" class="day" width="32" height="16">
            </div>
            <img src="../../views/qiandao/wine.png" alt="" class="wine" width="50" height="50">
          </li>
          <li>
            <div>
              <img src="../../views/qiandao/wednes.png" alt="" class="day" width="32" height="16">
            </div>
            <img src="../../views/qiandao/wine.png" alt="" class="wine" width="50" height="50">
          </li>
          <li>
            <div>
              <img src="../../views/qiandao/thurs.png" alt="" class="day" width="32" height="16">
            </div>
            <img src="../../views/qiandao/wine.png" alt="" class="wine" width="50" height="50">
          </li>
        </ul>
      </div>
      <div class="prize2">
        <ul>
          <li>
            <div>
              <img src="../../views/qiandao/fri.png" alt="" class="day" width="32" height="16">
            </div>
            <img src="../../views/qiandao/wine.png" alt="" class="wine" width="50" height="50">
          </li>
          <li>
            <div>
              <img src="../../views/qiandao/satur.png" alt="" class="day" width="32" height="16">
            </div>
            <img src="../../views/qiandao/wine.png" alt="" class="wine" width="50" height="50">
          </li>
          <li>
            <div>
              <img src="../../views/qiandao/sun.png" alt="" class="day" width="32" height="16">
            </div>
            <img src="../../views/qiandao/wine.png" alt="" class="wine" width="50" height="50">
          </li>
        </ul>
      </div>
      <div class="qian">
        <img src="../../views/qiandao/qian.png" alt="" width="80" height="80" @click="tip" v-show="tqian == 1">
        <img src="../../views/qiandao/yiqian.png" alt="" width="80" height="80"  v-show="tqian == 2">
        <p @click="backHandle">点此返回</p>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .qiandao
    background-image url("../../views/qiandao/bg.png")
    background-repeat:no-repeat
    background-size 100%
    height 100%
    overflow hidden
    .tishi
      background-image url("../../views/qiandao/tishi.png")
      background-size 100%
      margin 100px auto 0 auto
      width 150px
      height 28px
    .qian_total
      position relative
      width 70%
      margin 30px auto 0 auto
      height 14px
      border 1px solid #4e4343
      border-radius 7px
      img
        position absolute
        right -10px
        top -10px
      .yiqian
        width 0
        height 14px
        border-radius 7px
        background #4e4343
    .tian
      width 70%
      margin 3px auto 0 auto
      display flex
      span
        flex 1
        text-align center
    .prize1,.prize2
      margin-top 50px
      ul
        width 95%
        margin 0 auto
        display flex
        li
          flex 1
          text-align center
    .prize2
      margin-top 20px
      ul
          width 80%
    .qian
      text-align center
      margin 40px auto 0 auto
      p
        margin-top 10px
        font-size 12px
        color #4e4343
</style>

<script type="text/ecmascript-6">
  import { Toast } from 'mint-ui'
  import $ from 'jquery'
  export default{
    data () {
      return {
        tqian: '1',
        tday: new Date().getDay()
      }
    },
    methods: {
      backHandle () {
        this.$router.back()
      },
      tip () {
        this.tqian = 2
        $('.yiqian').css('width', '+=14%')
        Toast('签到成功')
      }
    }
  }
</script>

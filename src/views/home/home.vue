<template lang="html">
    <div>
      <transition name="slide-fade">
        <div class="qiandao-tip" v-show="qd">
          <img src="../home/register.png" alt="" width="28" height="28">
          <p>
            <span>连续签到领逗币兑换神秘礼物！</span>
            <span>每天签到都可获取有乐豆</span>
          </p>
          <input type="button" value="立即签到" @click="$router.push({path:'/qiandao'})">
        </div>
      </transition>
      <div class="home_contain" ref="home_contain">
        <ul>
          <li @click="$router.push({path:'/book',query:{book:'book'}})">
            <img src="../home/baser_cover.png" alt="" width="88" height="110" class="sm-img">
            <span class="book_name">重生之龙在都市</span>
          </li>
          <li>
            <img src="../home/baser_cover.png" alt="" width="88" height="110" class="sm-img">
            <span class="book_name">重生之龙在都市</span>
          </li>
          <li>
            <img src="../home/baser_cover.png" alt="" width="88" height="110" class="sm-img">
            <span class="book_name">重生之龙在都市</span>
          </li>
          <li>
            <img src="../home/baser_cover.png" alt="" width="88" height="110" class="sm-img">
            <span class="book_name">重生之龙在都市asd a </span>
          </li>
          <li>
            <img src="../home/baser_cover.png" alt="" width="88" height="110" class="sm-img">
            <span class="book_name">重生之龙在都市asd a </span>
          </li>
          <li>
            <img src="../home/baser_cover.png" alt="" width="88" height="110" class="sm-img">
            <span class="book_name">重生之龙在都市asd a </span>
          </li>
          <li>
            <img src="../home/baser_cover.png" alt="" width="88" height="110" class="sm-img">
            <span class="book_name">重生之龙在都市asd a </span>
          </li>
          <li>
            <img src="../home/baser_cover.png" alt="" width="88" height="110" class="sm-img">
            <span class="book_name">重生之龙在都市asd a </span>
          </li>
          <li>
            <img src="../home/baser_cover.png" alt="" width="88" height="110" class="sm-img">
            <span class="book_name">重生之龙在都市asd a </span>
          </li>
          <li>
            <img src="../home/baser_cover.png" alt="" width="88" height="110" class="sm-img">
            <span class="book_name">重生之龙在都市asd a </span>
          </li>
          <li>
            <img src="../home/baser_cover.png" alt="" width="88" height="110" class="sm-img">
            <span class="book_name">重生之龙在都市asd a </span>
          </li>
          <li>
            <img src="../home/baser_cover.png" alt="" width="88" height="110" class="sm-img">
            <span class="book_name">重生之龙在都市asd a </span>
          </li>
          <li>
            <img src="../home/baser_cover.png" alt="" width="88" height="110" class="sm-img">
            <span class="book_name">重生之龙在都市asd a </span>
          </li>
          <li>
            <img src="../home/baser_cover.png" alt="" width="88" height="110" class="sm-img">
            <span class="book_name">重生之龙在都市asd a </span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import { Toast } from 'mint-ui'
  export default {
    props: {
      homebook: {
        type: Object
      }
    },
    data () {
      return {
        projects: [],
        qd: true
      }
    },
    created () {
      this.$http.get('/ranking/gender')
        .then(function (response) {
          this.projects = response.data.data
          console.log(response)
        }.bind(this))
        .catch(function (error) {
          console.log(error)
        })
    },
    methods: {
      tip () {
        Toast('签到成功')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .slide-fade-enter-active
    transition: all .3s ease;
  .slide-fade-leave-active
    transition: all .3s ease;
  .slide-fade-enter, .slide-fade-leave-to
    transform: translateX(-10px)
  .contain
    width 100%
    overflow hidden;
    .slide-fade-enter-active
      transition: all .3s ease
    .slide-fade-leave-active
      transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
    .slide-fade-enter, .slide-fade-leave-to
      transform: translateX(10px)
      opacity: 0
    .qiandao-tip
      width 90%
      height 55px
      box-shadow 0 0 5px 2px #e0e0e0
      margin 24px auto 0 auto
      img
        vertical-align: 8px;
      p
        font-size 13px
        display inline-block
        width 185px
        span
          display inline-block
          line-height 18px
         span:nth-child(2)
            color #a08c8c
            margin-top 2px
      input
        padding 6px
        color white
        background #ff4c4c
        border-radius 2px
        float right
        margin 8px
    .home_contain
      width 96%
      margin 24px auto
      display flex
      ul
        width 100%
        li
          float left
          white-space:nowrap;
          width 33.3%
          text-align center
          padding-bottom 12px
          img
            display block
            margin 0 auto
            box-shadow 2px 3px 2px #e0e0e0
          span
            display inline-block
            font-size 12px
            line-height 32px
            width 80%
            overflow hidden
            text-overflow ellipsis;
            white-space nowrap;

  @media screen and (max-width: 320px)
    .contain
      .qiandao-tip
        height 52px
        input
            margin-left 0px
            font-size 12px
</style>



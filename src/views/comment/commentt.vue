<template lang="html">
    <div style="position: relative">
      <div class="rank border_bottom">
        <div class="book_img">
          <img src="../../components/operation/baser_cover.png" alt="" width="90" height="112" class="yiny">
        </div>
        <div class="user_new">
          <p class="top"><span class="user_book">沙海</span><span class="user_name">踏雪无痕</span></p>
          <div class="paim">
            <p class="desc"><span class="book_p">书评：356</span><span class="fensi">粉丝：1.3w</span></p>
          </div>
          <input type="button" value="关注">
        </div>
        <div class="notice">
          <p :class="cont?'zhan':'shou'">沙海VIP群号1564896，欢迎各位兄弟姐妹们欢迎各位兄弟姐妹们欢迎各位兄弟姐妹们欢迎各位兄弟姐妹们欢迎各位兄弟姐妹们欢迎各位兄弟姐妹们欢迎各位兄弟姐妹们</p>
        </div>
        <p class="fr zk" @click="control">展开简介</p>
      </div>
      <div class="com_hot border_bottom">
        <ul>
          <li @click="$router.push({path:'/commentt2',query:{book:'jin'}})"><span class="jin">精</span>精华评论（16）<span class="fr"><i class="icon-arrow"></i></span></li>
          <li @click="$router.push({path:'/commentt2',query:{book:'hot'}})"><span class="hot">热</span>热门评论（19）<span class="fr"><i class="icon-arrow"></i></span></li>
        </ul>
        <p class="comment_list" >
          <a  @click="isshow('1')" :class="{red: show === '1'}">全部</a>
          <a  @click="isshow('2')">书评</a>
          <a  @click="isshow('3')">看法</a>
        </p>
      </div>
      <transition name="slide">
        <div class="comment" v-show="show == '1'">
          <div class="page-loadmore-wrapper" ref="wrapper">
            <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
              <div class="ev_comment kuai">
                <div class="tx">
                  <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="36" height="36">
                </div>
                <div class="user_new">
                  <span>灭世邪神</span>
                  <span class="user_lv">青铜会员</span>
                  <span class="user_vip">
                    <i>vip</i>
                  </span>
                  <span class="user_author"><i>作者</i></span>
                </div>
                <p class="kuai">这本书太好看了！1000阅读币红包送上，希望后续更加精彩</p>
                <p class="comment_time">2017-03-28</p>
              </div>
              <div class="ev_comment kuai">
                <div class="tx">
                  <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="36" height="36">
                </div>
                <div class="user_new">
                  <span>灭世邪神</span>
                  <span class="user_lv">青铜会员</span>
                  <span class="user_vip">
                    <i>vip</i>
                  </span>
                  <span class="user_author"><i>作者</i></span>
                </div>
                <p class="kuai">这本书太好看了！1000阅读币红包送上，希望后续更加精彩</p>
                <p class="comment_time">2017-03-28</p>
              </div>
              <div class="ev_comment kuai">
                <div class="tx">
                  <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="36" height="36">
                </div>
                <div class="user_new">
                  <span>灭世邪神</span>
                  <span class="user_lv">青铜会员</span>
                  <span class="user_vip">
                    <i>vip</i>
                  </span>
                  <span class="user_author"><i>作者</i></span>
                </div>
                <p class="kuai">这本书太好看了！1000阅读币红包送上，希望后续更加精彩</p>
                <p class="comment_time">2017-03-28</p>
              </div>
              <div class="ev_comment kuai">
                <div class="tx">
                  <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="36" height="36">
                </div>
                <div class="user_new">
                  <span>灭世邪神</span>
                  <span class="user_lv">青铜会员</span>
                  <span class="user_vip">
                    <i>vip</i>
                  </span>
                  <span class="user_author"><i>作者</i></span>
                </div>
                <p class="kuai">这本书太好看了！1000阅读币红包送上，希望后续更加精彩</p>
                <p class="comment_time">2017-03-28</p>
              </div>
            </mt-loadmore>
          </div>
        </div>
      </transition>
      <transition name="slide">
        <div class="comment" v-show="show == '2'">
          <div class="page-loadmore-wrapper" ref="wrapper">
            <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
              <div class="ev_comment kuai">
                <div class="tx">
                  <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="36" height="36">
                </div>
                <div class="user_new">
                  <span>灭世邪神</span>
                  <span class="user_lv">青铜会员</span>
                  <span class="user_vip">
                    <i>vip</i>
                  </span>
                  <span class="user_author"><i>作者</i></span>
                </div>
                <p class="kuai">这本书太好看了！1000阅读币红包送上，希望后续更加精彩</p>
                <p class="comment_time">2017-03-28</p>
              </div>
              <div class="ev_comment kuai">
                <div class="tx">
                  <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="36" height="36">
                </div>
                <div class="user_new">
                  <span>灭世邪神</span>
                  <span class="user_lv">青铜会员</span>
                  <span class="user_vip">
                    <i>vip</i>
                  </span>
                  <span class="user_author"><i>作者</i></span>
                </div>
                <p class="kuai">这本书太好看了！1000阅读币红包送上，希望后续更加精彩</p>
                <p class="comment_time">2017-03-28</p>
              </div>
              <div class="ev_comment kuai">
                <div class="tx">
                  <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="36" height="36">
                </div>
                <div class="user_new">
                  <span>灭世邪神</span>
                  <span class="user_lv">青铜会员</span>
                  <span class="user_vip">
                    <i>vip</i>
                  </span>
                  <span class="user_author"><i>作者</i></span>
                </div>
                <p class="kuai">这本书太好看了！1000阅读币红包送上，希望后续更加精彩</p>
                <p class="comment_time">2017-03-28</p>
              </div>
              <div class="ev_comment kuai">
                <div class="tx">
                  <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="36" height="36">
                </div>
                <div class="user_new">
                  <span>灭世邪神</span>
                  <span class="user_lv">青铜会员</span>
                  <span class="user_vip">
                    <i>vip</i>
                  </span>
                  <span class="user_author"><i>作者</i></span>
                </div>
                <p class="kuai">这本书太好看了！1000阅读币红包送上，希望后续更加精彩</p>
                <p class="comment_time">2017-03-28</p>
              </div>
            </mt-loadmore>
          </div>
        </div>
      </transition>
      <transition name="slide">
        <div class="comment" v-show="show == '3'">
          <div class="ev_comment kuai">
            <div class="tx">
              <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="36" height="36">
            </div>
            <div class="user_new">
              <span>灭世邪神</span>
              <span class="user_lv">青铜会员</span>
              <span class="user_vip">
                <i>vip</i>
              </span>
              <span class="user_author"><i>作者</i></span>
            </div>
            <p class="kuai">这本书太好看了！1000阅读币红包送上，希望后续更加精彩</p>
            <p class="comment_time">2017-03-28</p>
            <p class="duanluo">
              【第九章 终极幽灵要】
              <span>可沈飞转念一想，这劣药大笔可不是平时的啊阿达安抚安抚是否啊</span>
            </p>
          </div>
        </div>
      </transition>
      <div class="fb" v-show="showSth" @touchmove.prevent @click="showfb">
        <div class="dise" @click.stop="">
          <input type="text" class="bt" placeholder="标题（选填）">
          <textarea type="text" class="nr" placeholder="留下你对本书的看法以及感受" @input="descInput" maxlength="200" v-model="desc"></textarea>
          <p class="fr"><span>{{textnum}}/200</span><input type="button" value="发表" class="tj"></p>
        </div>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
@import "../../common/stylus/mixin.styl"
.rank
  padding 20px 15px
  .book_img
    position absolute
  .user_new
    display inline-block
    padding-left 110px
    height 110px
    padding-top 8px
    width 70%
    .top
      border-1px(rgba(245,240,240,0.9))
      padding-bottom 12px
      .user_book
        margin-right 16px
      .user_name
        padding-left 16px
        border-left 1px solid  #998282
        font-size 12px
        color #998282
    .paim
      margin-top 8px
      .desc
        span
          font-size 12px
          color #998282
        .book_p
          margin-right 16px
        .fensi
          padding-left 16px
          border-left 1px solid  #998282
    input
      color white
      background #ff4c4c
      width 62px
      margin-top 12px
      padding 4px 8px 4px 8px
      border-radius 4px
  .notice
    padding 12px 18px
    p
      font-size 12px
      line-height 22px
    .shou
      height 24px
      overflow hidden
      text-overflow:ellipsis
      white-space: nowrap
    .zhan
      height auto
  .zk
    font-size 12px
    color #998282
.com_hot
  ul
    width 93%
    margin 0 auto
    padding 8px 0
    li
      height 30px
      line-height 30px
      &:last-child
        margin-top 12px
      span
        border-radius 4px
      .jin
        color white
        background #0078ff
        padding 2px 4px
        margin-right 10px
      .hot
        color white
        background #ff4c4c
        padding 2px 4px
        margin-right 10px
  .comment_list
    width 80%
    margin 20px 0 0px 18px
    a
      display inline-block
      margin-right 18px
      height 24px
      color black
.slide-enter-active
  transition: all .3s ease;
.slide-leave-active
  transition: all .3s ease;
.slide-enter, .slide-leave-to
  transform: translateX(-100%)
.slide-enter-active
  transition: all .3s ease;
.slide-leave-active
  transition: all .3s ease;
.slide-enter, .slide-leave-to
  transform: translateX(-100%)
.slide-enter-active
  transition: all .3s ease;
.slide-leave-active
  transition: all .3s ease;
.slide-enter, .slide-leave-to
  transform: translateX(-100%)
.slide-enter-active
  transition: all .3s ease;
.slide-leave-active
  transition: all .3s ease;
.slide-enter, .slide-leave-to
  transform: translateX(-100%)
.fb
  width 100%
  height 100%
  background rgba(140,140,140,0.5)
  position absolute
  top 0
  left 0
  .dise
    width 100%
    height 280px
    background white
    overflow  hidden
    input
      width 90%
      height 25px
      padding 1px 5px
      margin 15px auto
      display block
      background-color #f5f0f0
      color #998282
    textarea
      width 90%
      height 25px
      margin 15px auto
      background-color #f5f0f0
      display block
      color #998282
      border none
      padding 4px 5px
    .nr
      height 140px
    .tj
      display inline-block
      width 50px
      background #ff4c4c
      color white
      margin 0 15px
      border-radius 4px
</style>

<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          show: '1',
          list: [],
          allLoaded: false,
          bottomStatus: '',
          wrapperHeight: 0,
          cont: false,
          textnum: 0,
          showSth: false,
          desc: ''
        }
      },
      methods: {
        isshow: function (list) {
          this.show = list
        },
        handleBottomChange (status) {
          this.bottomStatus = status
        },
        loadBottom () {
          setTimeout(() => {
            let lastValue = this.list[this.list.length - 1]
            if (lastValue < 40) {
              for (let i = 1; i <= 10; i++) {
                this.list.push(lastValue + i)
              }
            } else {
              this.allLoaded = true
            }
            this.$refs.loadmore.onBottomLoaded()
          }, 1500)
        },
        control () {
          this.cont = !this.cont
        },
        descInput () {
          var txtVal = this.desc.length
          this.textnum = 200 - txtVal
        },
        showfb () {
          this.showSth = !this.showSth
        }
      },
      mounted () {
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
      }
    }
</script>

<template lang="html">
  <div>
    <div class="shell ">
      <div class="book_img">
        <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="90" height="112" class="yiny">
      </div>
      <div class="book_new">
        <h3>三生三世琉璃殇</h3>
        <p >作者：妖娆雪 玄幻</p>
        <p>191.5W字 <span>5有乐币/千字</span></p>
        <p>开通VIP，最低尊享8折优惠></p>
      </div>
      <div class="book_pf">
        <p>9.3分</p>
        <p>连载中</p>
      </div>
      <p class="brief">如果我也有来世，我发誓不在遇见，不在相恋！神帝山山顶，灵力散尽的雪瑶轻轻的说出这句话，却似淬看最狠戾的毒，让烈炎肝肠寸断！</p>
    </div>
    <div class="border_bottom">
      <p class="latest_new">
        <i class="icon-consuming-records"></i>目录 <span>830章 花佛</span> <span class="fr">16小时前更新 <i class="icon-arrow"></i></span>
      </p>
    </div>
    <div class="border_bottom">
      <p class="latest_new">
        <i class="icon-consuming-records"></i>目录 <span>830章 花佛</span> <span class="fr">16小时前更新 <i class="icon-arrow"></i></span>
      </p>
    </div>
    <div class="border_bottom">
      <div class="comment">
        <div class="kuai">
          <h2>评论区</h2>
          <a href="">发表评论</a>
        </div>
        <div class="ev_comment kuai">
          <div class="tx">
            <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="36" height="36">
          </div>
          <div class="user_new">
            <span>灭世邪神</span>
            <span class="user_lv">青铜会员</span>
          </div>
          <p class="kuai" @click="$router.push({path:'/comment',query:{bang:'comment'}})">这本书太好看了！1000阅读币红包送上，希望后续更加精彩</p>
          <p class="comment_time">2017-03-28</p>
        </div>
        <div class="ev_comment kuai">
          <div class="tx">
            <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="36" height="36">
          </div>
          <div class="user_new">
            <span>灭世邪神</span>
            <span class="user_lv">青铜会员</span>
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
          </div>
          <p class="kuai">这本书太好看了！1000阅读币红包送上，希望后续更加精彩</p>
          <p class="comment_time">2017-03-28</p>
        </div>
        <p class="more">加载更多</p>
      </div>
    </div>
    <div>
      <h1>喜欢这本书的朋友还喜欢</h1>
      <transverse></transverse>
    </div>
    <div class="title">
      <div class="line"></div>
      <div class="text">已经到底了，区别的频道逛逛吧</div>
      <div class="line"></div>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .shell
    padding 20px 15px
    border-1px(rgba(245,240,240,0.9))
    .book_img
      position absolute
    .book_new
      display inline-block
      padding-left 100px
      height 128px
      padding-top 8px
      p
        line-height 26px
        font-size 14px
        span
          color #ff5400
      p:nth-child(2)
        color #998282
        font-size 12px
      p:nth-child(4)
        color #ff7e54
    h3
      display inline-block
      width 120px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap;
    .book_pf
      position absolute
      right 20px
      top 20px
      font-size 14px
      p
        text-align center
        width auto
        line-height 16px
        &:first-child
          border-bottom 2px solid red
    .brief
      color #998282
      line-height 22px
  .border_bottom
    .latest_new
      padding 8px 16px
      font-size 14px
      i
        font-size 28px
        vertical-align middle
        &:first-child
          font-size 32px
  h1
    padding 12px 18px 0 18px
  .title
    display: flex
    width: 90%
    margin: 16px auto 28px auto
    color #a5a5a5
    .line
      flex: 1
      position: relative
      top: -6px
      border-bottom: 1px solid #bfbfbf
    .text
      padding: 0 12px
      font-weight: 600
      font-size: 14px
</style>

<script type="text/ecmascript-6">
  import transverse from '@/components/transverse-recommend/transverse_recommend'
  export default{
    components: {
      transverse
    }
  }
</script>

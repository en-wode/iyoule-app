<template lang="html">
  <div>
    <div class="shell ">
      <div class="book_img">
        <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="90" height="112" class="yiny">
      </div>
      <div class="book_new">
        <h3>三生三世琉璃殇</h3>
        <p >作者：妖娆雪 玄幻</p>
        <p>191.5W字   <span>5有乐币</span>/千字</p>
        <p>开通VIP，最低尊享8折优惠></p>
      </div>
      <div class="book_pf">
        <p><span>9.3</span>分</p>
        <p>连载中</p>
      </div>
      <p class="brief"><i class="icon-horn red"></i>如果我也有来世，我发誓不在遇见，不在相恋！神帝山山顶，灵力散尽的雪瑶轻轻的说出这句话，却似淬看最狠戾的毒，让烈炎肝肠寸断！</p>
    </div>
    <div class="border_bottom">
      <p class="latest_new" @click="$router.push({path:'/catalog',query:{book:'catalog'}})">
        <i class="icon-consuming-records"></i>目录 <span class="zhangjie">830章 花佛</span> <span class="fr">16小时前更新 <i class="icon-arrow"></i></span>
      </p>
    </div>
    <div class="border_bottom book_handle">
     <li @click="$router.push({path:'/operation',query:{book:'flower'}})">
       <i class="icon-flower red"></i>
       <span>鲜花</span>
     </li>
      <li @click="$router.push({path:'/operation',query:{book:'gift'}})">
        <i class="icon-gift" style="color: #79c814"></i>
        <span>打赏</span>
      </li>
      <li @click="$router.push({path:'/operation',query:{book:'yuep'}})">
        <i class="icon-yuep" style="color: #fc4b4b"></i>
        <span>投月票</span>
      </li>
      <li>
        <i class="icon-share" style="color: #f29c2e"></i>
        <span>分享</span>
      </li>
    </div>
    <div class="border_bottom">
      <div class="comment">
        <div class="kuai">
          <h2>评论区</h2>
          <a href="#" @click="showFB">发表评论</a>
        </div>
        <div class="ev_comment kuai">
          <div class="tx">
            <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="36" height="36">
          </div>
          <div class="user_new">
            <span>灭世邪神</span>
            <span class="user_lv">青铜会员</span>
          </div>
          <p class="kuai" @click="$router.push({path:'/comment',query:{book:'comment'}})">这本书太好看了！1000阅读币红包送上，希望后续更加精彩</p>
          <p class="comment_time">2017-03-28  <i class="icon-comment2 fr"><span>6</span></i> <i class="icon-zan fr"><span>6</span></i></p>
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
        <p class="more" @click="$router.push({path:'/commentt',query:{book:'commentt'}})">加载更多</p>
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
      height 112px
      padding-top 8px
      p
        line-height 26px
        font-size 12px
        span
          color #ff5400
          margin-left 6px
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
      font-size 12px
      p
        text-align center
        width auto
        line-height 16px
        &:first-child
          border-bottom 2px solid red
        span
          font-size 16px
    .brief
      color #998282
      line-height 22px
      font-size 16px
      i
        margin-right 8px
  .book_handle
    display flex
    padding 6px 0
    li
      float left
      flex 1
      height 48px
      text-align center
      line-height 22px
      i
        font-size 20px
        display inline-block
      span
        display block
        font-size 12px
        vertical-align: 4px;
  .border_bottom
    display flex
    .latest_new
      padding 8px 16px
      font-size 14px
      width 100%
      .zhangjie
        margin-left 24px
      .fr
        font-size 12px
        color #fc4b4b
      i
        font-size 14px
        vertical-align middle
      .icon-consuming-records
        font-size 16px
        margin-right 10px
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
    data () {
      return {
        showpl: false
      }
    },
    components: {
      transverse
    },
    methods: {
      showFB: function () {
        this.showpl = true
        this.$emit('isshowpl', this.showpl)
      }
    }
  }
</script>

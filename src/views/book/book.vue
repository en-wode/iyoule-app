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
</style>

<script type="text/ecmascript-6">
    export default{
    }
</script>

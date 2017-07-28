<template lang="html">
    <div>
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
          <p>沙海VIP群号1564896，欢迎各位兄弟姐妹们欢迎各位兄弟姐妹们欢迎各位兄弟姐妹们欢迎各位兄弟姐妹们欢迎各位兄弟姐妹们欢迎各位兄弟姐妹们欢迎各位兄弟姐妹们</p>
        </div>
        <p class="fr zk">展开简介</p>
      </div>
      <div class="com_hot border_bottom">
        <ul>
          <li><span class="jin">精</span>精华评论（16）<span class="fr"><i class="icon-arrow"></i></span></li>
          <li><span class="hot">热</span>热门评论（19）<span class="fr"><i class="icon-arrow"></i></span></li>
        </ul>
        <p class="comment_list" >
          <a href="">全部</a>
          <a href="">书评</a>
          <a href="">看法</a>
        </p>
      </div>
      <div class="comment">
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
      height 24px
      overflow hidden
      text-overflow:ellipsis
      white-space: nowrap
  .zk
    font-size 12px
    color #998282
.com_hot
  ul
    width 90%
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
        padding 4px 6px
        margin-right 10px
      .hot
        color white
        background #ff4c4c
        padding 4px 6px
        margin-right 10px
  .comment_list
    width 80%
    margin 20px 0 0px 18px
    a
      display inline-block
      margin-right 18px
      height 24px
      color black
</style>

<script type="text/ecmascript-6">
    export default{
    }
</script>

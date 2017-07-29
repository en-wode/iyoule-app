<template lang="html">
    <div class="book_read">
      <div class="book_head">
        <i class="icon-arrow-left"></i>
        <span class="fr">
          <span>购买</span>
          <i class="icon-red_packet"></i>
          <i class="icon-menu"></i>
        </span>
        <div class="head_caozuo">
          <ul>
            <li><i class="icon-update"></i>更新提醒</li>
            <li><i class="icon-mark"></i>添加书签</li>
            <li><i class="icon-subscription"></i>自动订阅</li>
            <li><i class="icon-share2"></i>分享</li>
            <li><i class="icon-notion"></i>显示想法</li>
            <li><i class="icon-chapter_wrong"></i>章节报错</li>
          </ul>
        </div>
      </div>
      <div class="book_tip">
        <span class="fl">《丹武神尊》</span><span class="fr">第二章 战神之旅</span>
      </div>
      <div class="book_title">第一张 这是标题</div>
      <div class="book_contain">
        此刻，在辉煌会所，乌鸦正靠在一张大沙发上，手里端着一杯威士忌。 他脸上神情没有被八两金的坏消息左右，还是阴森森的笑容。 他的背后站着一排黑衣保镖，一个个膀大腰圆，腰里全都藏匿着武器。 而乌鸦的对面，坐着郭思思、
        高富帅和贾仁义一伙人，此刻，三人脸色正如六月乌云阴沉。 “郭小姐，高少爷，别这种不痛快的表...
      </div>
      <div class="book_bottom">
        <div class="book_detail">
          <div class="book_back">
            <i class="icon-withdraw"></i>
          </div>
          <div class="book_now">
            <p>第365章 沙海</p>
            <p>65.25%</p>
          </div>
        </div>
        <div class="range">
          <mt-range
            :min="10"
            :max="100"
            :step="1"
            :bar-height="2">
            <div slot="start">0</div>
            <div slot="end">100</div>
          </mt-range>
        </div>
        <div class="caozuo">
          <li>
            <i class="icon-catalog"></i>
            <span>目录</span>
          </li>
          <li>
            <i class="icon-font"></i>
            <span>设置</span>
          </li>
          <li>
            <i class="icon-catalog"></i>
            <span>评论</span>
          </li>
          <li>
            <i class="icon-catalog"></i>
            <span>下载</span>
          </li>
        </div>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixin.styl"
  .book_read
    background #dfcba9
    height 100%
    .book_head
      background #2e2727
      position absolute
      color white
      top 0
      left 0
      width 100%
      height 44px
      line-height 44px
      i
        font-size 32px
        vertical-align: middle;
    .head_caozuo
      width 40%
      position absolute
      right 0%
      top 44px
      background #2e2727
      li
        border-1px(rgba(245,240,240,0.2))
    .book_tip
      width 90%
      margin 0 auto
      padding 10px 0
      font-size 12px
      height 15px
    .book_title
      text-align center
    .book_contain
      width 90%
      margin 0 auto
      line-height 24px
    .book_bottom
      height 120px
      width 100%
      position absolute
      background #2e2727
      color white
      bottom 0
      left 0
      z-index 99
      .book_detail
        position absolute
        width 30%
        left 40%
        bottom 130px
        background #2e2727
        display flex
        .book_back
          flex 1
          i
            font-size 40px
        .book_now
          flex 2
      .mt-range-thumb
        top 7px
        width 15px
        height 15px
    .caozuo
      display flex
      li
        float left
        flex 1
        height 48px
        text-align center
        i
          font-size 32px
          display inline-block
        span
          display block
          font-size 12px

</style>

<script type="text/ecmascript-6">
  export default{
  }
</script>

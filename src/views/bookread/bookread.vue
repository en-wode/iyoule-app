<template lang="html">
    <div class="book_read">
      <div class="book_head">
        <i class="icon-arrow-left"></i>
        <span class="fr">
          <span>购买</span>
          <i class="icon-red_packet"></i>
          <i class="icon-menu"></i>
        </span>
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
        <div>
          <span>上一章</span>
          <mt-range
            v-model="rangeValue"
            :min="10"
            :max="90"
            :step="10"
            :bar-height="5">
          </mt-range>
          <span>下一章</span>
        </div>
        <div></div>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
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
</style>

<script type="text/ecmascript-6">
    export default{
    }
</script>

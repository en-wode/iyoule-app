<template lang="html">
    <div >
      <div class="lz border_bottom">
        <div class="comment">
          <div class="ev_comment kuai lz">
            <div class="tx">
              <img src="../../components/operation/baser_cover.png" alt="" width="36" height="36">
            </div>
            <div class="user_new">
              <span>灭世邪神</span>
              <span class="user_lv">青铜会员</span>
              <span class="pl">楼主</span>
            </div>
            <p class="kuai">这本书太好看了！1000阅读币红包送上，希望后续更加精彩</p>
            <p class="comment_time">2017-03-28<i class="icon-zan fr" @click="dzan"><span>6</span></i></p>
          </div>
        </div>
      </div>
      <div class="comment">
        <h1>所有回复</h1>
        <div class="ev_comment kuai">
          <div class="tx">
            <img src="../../components/operation/baser_cover.png" alt="" width="36" height="36">
          </div>
          <div class="user_new">
            <span>灭世邪神</span>
            <span class="user_lv">青铜会员</span>
          </div>
          <p class="kuai">这本书太好看了！1000阅读币红包送上，希望后续更加精彩</p>
          <p class="comment_time">2017-03-28<i class="icon-comment2 fr"></i></p>
        </div>
        <div class="ev_comment kuai">
          <div class="tx">
            <img src="../../components/operation/baser_cover.png" alt="" width="36" height="36">
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
  .ev_comment
    border-bottom none
    .pl
      color #3b89ff
      font-size 12px
</style>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  export default{
    methods: {
      dzan () {
        $('.icon-zan').css('color', 'red')
      }
    }
  }
</script>

<template lang="html">
    <div>
      <d-head title="书名" name="沙海"></d-head>
      <div class="contain">
        <mt-navbar class="page-part" v-model="selected">
          <mt-tab-item id="1">目录</mt-tab-item>
          <mt-tab-item id="2">书签</mt-tab-item>
          <mt-tab-item id="3">看法</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <catalog></catalog>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <div class="no">
              <i class="icon-mark"></i>
              <p>本书暂时还未添加书签</p>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <div class="no" hidden>
              <i class="icon-mark"></i>
              <p>暂无看法，阅读时长按文字添加看法</p>
            </div>
            <div class="comment">
              <div class="ev_comment kuai">
                <div class="tx">
                  <img src="../../../views/bookread/book-detail/baser_cover.png" alt="" width="36" height="36">
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
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
.no
  width 100%
  margin 0 auto
  text-align center
  font-size 42px
  margin-top 30%
  color #806c6c
  p
    font-size 16px

</style>

<script type="text/ecmascript-6">
  import detail from '@/components/home-header/detail-header.vue'
  import catalog from '@/views/catalog/catalog.vue'
  export default{
    name: 'page-navbar',
    data () {
      return {
        selected: '1'
      }
    },
    components: {
      'd-head': detail,
      catalog
    }
  }
</script>

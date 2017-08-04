<template>
  <div>
    <d-head></d-head>
    <div class="contain">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">全部书籍</mt-tab-item>
        <mt-tab-item id="2">已下载</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <ul class="jilu">
            <li>
              <div class="book_img">
                <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="48" height="60">
              </div>
              <div class="book_new">
                <h3>最强高手在都市</h3>
                <p >作者：散心靓意</p>
                <p>已订阅全本</p>
              </div>
              <div class="book_down">
                <p class="dowm_time">下载时间：------</p>
                <p class="down fir">
                  <span>自动订阅</span>
                  <mt-cell>
                    <mt-switch v-model="value1" ></mt-switch>
                  </mt-cell>
                </p>
                <p class="down">
                  <span>下载本书</span>
                  <i class="icon-download"></i>
                </p>
              </div>
            </li>
            <li>
              <div class="book_img">
                <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="48" height="60">
              </div>
              <div class="book_new">
                <h3>最强高手在都市</h3>
                <p >作者：散心靓意</p>
                <p>已订阅全本</p>
              </div>
              <div class="book_down">
                <p class="dowm_time">下载时间：------</p>
                <p class="down fir">
                  <span>自动订阅</span>
                  <mt-cell>
                    <mt-switch v-model="value1" ></mt-switch>
                  </mt-cell>
                </p>
                <p class="down">
                  <span>下载本书</span>
                  <i class="icon-download"></i>
                </p>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <ul class="jilu">
            <li>
              <div class="book_img">
                <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="48" height="60">
              </div>
              <div class="book_new">
                <h3>最强高手在都市</h3>
                <p >作者：散心靓意</p>
                <p>下载时间：2016-06-12</p>
              </div>
              <div class="read">
                阅读
              </div>
            </li>
            <li>
              <div class="book_img">
                <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="48" height="60">
              </div>
              <div class="book_new">
                <h3>最强高手在都市</h3>
                <p >作者：散心靓意</p>
                <p>下载时间：2016-06-12</p>
              </div>
              <div class="read">
                阅读
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import detail from '../../components/home-header/detail-header.vue'
  export default {
    data () {
      return {
        selected: '1',
        value1: false
      }
    },
    components: {
      'd-head': detail
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .jilu
    width 100%
    li
      padding 24px 20px
      height 60px
      font-size 14px
      position: relative;
      .book_img
        position absolute
      .book_new
        display inline-block
        padding-left 56px
        height 68px
        font-size 12px
        line-height 16px
        p
          padding 4px 0
          color #b6a7a7
      .book_down
        position absolute
        right 20px
        top 24px
        font-size 12px
        .dowm_time
          padding-bottom 10px
          border-1px(rgba(245,240,240,1))
        .down
          display inline-block
          width 47%
          i
            font-size 21px
            display inline-block
            margin-left 20%
          span
            display inline-block
            padding 5px 0
        .fir
          border-right 1px solid rgba(245,240,240,1)
      .mint-cell
        width 100%
        min-height 20px
      .read
        position absolute
        right 20px
        top 34px
        font-size 12px
        border 1px solid #ff4c4c
        padding 4px 8px
        color #ff4c4c
        border-radius 4px
</style>

<template lang="html">
    <div>
      <div class="rank border_bottom">
        <div class="book_img">
          <img src="../../components/operation/baser_cover.png" alt="" width="90" height="112" class="yiny">
        </div>
        <div class="user_new">
          <p class="top"><span class="user_book">沙海</span><span class="user_name">踏雪无痕</span></p>
          <div class="paim">
            <li>
              <p>NO.40</p>
              <p class="pm">鲜花榜</p>
            </li>
            <li>
              <p>NO.40</p>
              <p class="pm">鲜花数</p>
            </li>
          </div>
        </div>
      </div>
      <div class="num rank border_bottom">
        <p><span>剩余鲜花:0朵</span> </p>
        <div class="page-picker-wrapper">
          <mt-picker :slots="numberSlot" @change="onNumberChange" :visible-item-count="3"></mt-picker>
        </div>
      </div>
      <div class="jilu">

        <input type="button" value="确认赠送">
        <p class="tp_titlt">赠送记录</p>
        <div class="jl_detail">
          <img src="../../components/operation/baser_cover.png" alt="" width="30" height="30">
          <span>199***654刚刚赠送了5朵鲜花</span>
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
    padding-left 100px
    height 100px
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
      width 90%
      display flex
      text-align center
      li
        flex 1
        margin-top 18px
        line-height 20px
        &:first-child
          border-right 1px solid  #a99593
        .pm
          font-size 12px
          color #a99593
.num
  ul
    width 100%
    height 140px
    margin-top 20px
    li
      float left
      width 30%
      text-align center
      height 60px
      line-height 60px
      border-radius 4px
      background #fff8ee
      margin-bottom 14px
      border 1px solid #a99593
      span
        font-size 12px
        color #a99593
        display block
        line-height 12px
      .ticket
        color black
        margin 10px 0 10px 0
      &:nth-child(2)
        margin  0 12px 0 12px
      &:nth-child(5)
        margin  0 12px 0px 12px
.jilu
  width 90%
  margin 24px auto
  font-size 14px
  p
    line-height 24px
    height 24px
    padding-top 10px
    color #a99593
  input
    width 100%
    height 40px
    background #ff4c4c
    color white
    margin-top 20px
    border-radius 4px
  .tp_titlt
    margin 12px 0 12px 0
    border-1px(rgba(245,240,240,0.9))
    height 28px
  .jl_detail
    img
      border-radius 50%
      border 1px solid #bcadad
    span
      display inline-block
      height 30px
      vertical-align middle
</style>

<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          number: 0,
          numberSlot: [{
            flex: 1,
            defaultIndex: 0,
            values: [0, 1, 2, 3, 4, 5, 6],
            className: 'slot1'
          }]
        }
      },
      methods: {
        onNumberChange (picker, values) {
          this.number = values[0]
        }
      }
    }
</script>

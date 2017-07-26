<template lang="html">
    <div class="header">
      <ul>
        <li @click="backHandle"><span class="icon-arrow-left"></span></li>
        <li>{{bang[this.$route.query.bang]}}</li>
        <li class="search">
          <span class="icon-search"></span>
        </li>
      </ul>
      <div class="search">
      </div>
    </div>
  <!--<mt-header fixed >
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>-->
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .header
    height 55px
    background #2e2727
    position fixed
    width 100%
    top 0
    left 0
    z-index 99
    ul
      width 95%
      margin 0 auto
      li
        float left
        color white
        font-size 16px
        line-height 55px
        text-align center
        &:nth-child(2)
          width 80%
        span
          font-size 28px
          vertical-align middle
      .search
        flex 0 0 50px
        font-size 32px
</style>

<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          bang: {
            hit: '点击榜',
            score: '评分榜',
            ticket: '月票榜',
            reward: '打赏榜',
            proflie: '个人资料',
            recharge: '充值',
            person_lv: '我的等级',
            person_vip: '会员等级',
            feedback: '帮助反馈',
            content: '专题',
            book: '书籍详情'
          }
        }
      },
      methods: {
        backHandle () {
          this.$router.back()
        }
      }
    }
</script>

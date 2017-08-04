<template lang="html">
  <div>
    <div class="header">
      <ul>
        <li @click="backHandle"><span class="icon-arrow-left"></span></li>
        <li>
          <input type="text" ref="input1">
        </li>
        <li class="search" @click="search">
          <span class="icon-search" ></span>
        </li>
      </ul>
    </div>
    <div class="search_jilu">
      <div class="wd9 history">
        <p class="">历史搜索 <span class="fr" @click="clear"><i class="icon-delete"></i></span></p>
        <div class="book_name">
          <span v-for="searcharr in searcharr">{{searcharr}} </span>
        </div>
      </div>
      <div class="wd9 hot" >
        <p class="">热门搜索</p>
        <div class="book_name">
          <span class="red">神级小保安<i class="icon-fire"></i></span>
          <span>神级小保安</span>
          <span>我的冰山美女老婆</span>
          <span>神级小保安</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .header
    height 55px
    background #2e2727
    width 100%
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
          width 82%
        span
          font-size 20px
          vertical-align middle
        input
          width 80%
          margin 0 auto
          padding 2px 8px
          height 30px
          border-radius 4px
          font-size 14px
      .search
        flex 0 0 50px
        font-size 28px
  .search_jilu
    margin-top 20px
    p
      padding-bottom 8px
      color #999999
      border-1px(rgba(245,240,240,0.8))
    .book_name
      span
        font-size 14px
        display inline-block
        padding 12px 0 12px 0
        width 32%
        overflow hidden
        text-overflow: ellipsis
        white-space: nowrap
    .hot
      margin-top 32px
</style>

<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          value: sessionStorage.userName,
          searcharr: []
        }
      },
      methods: {
        backHandle () {
          this.$router.back()
        },
        search () {
          if (this.searcharr.length > 5) {
            this.searcharr.shift()
          }
          this.searcharr.push(this.$refs.input1.value)
          sessionStorage.userName = this.searcharr
          this.value = sessionStorage.userName
        },
        clear () {
          sessionStorage.userName = ''
        }
      }
    }
</script>

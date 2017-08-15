<template lang="html">
    <div class="header">
      <ul>
        <li @click="toggle"><span class="icon-personal"></span></li>
        <li>有乐中文</li>
        <router-link class="search" tag="li" to="/search">
          <span class="icon-search"></span>
        </router-link>
      </ul>
      <div class="search">
      </div>
    </div>
  <!--<mt-header fixed >
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>-->
</template>

<script type="text/ecmascript-6">
  export default{
    data: function () {
      return {
        isShow: false
      }
    },
    methods: {
      toggle: function () {
        this.isShow = !this.isShow
        this.$emit('selectshow', this.isShow)
      }
    }
  }
</script>

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
          width 84%
        span
          font-size 26px
          vertical-align middle
      .search
        flex 0 0 50px
        font-size 32px
  @media screen and (max-width: 320px)
    .header
      ul
        li
          &:nth-child(2)
            width 80%
</style>



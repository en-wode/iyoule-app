<template lang="html">
    <div class="fb" v-show="showSth2" @touchmove.prevent @click="showfb2">
      <div class="dise" @click.stop="">
        <input type="text" class="nr" placeholder="回复：">
        <input type="button" value="回复" class="fbhf">
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .fb
    width 100%
    height 100%
    background rgba(140,140,140,0.5)
    position fixed
    top 55px
    left 0
    z-index: 100
    .dise
      padding 0 15px
      margin 0 auto
      height 60px
      background white
      overflow  hidden
      display flex
      .nr
        flex 4
        height 25px
        padding 1px 5px
        margin 15px auto
        display block
        color #998282
      .fbhf
        flex 1
        height 25px
        padding 1px 5px
        margin 15px 0 15px 8px
        background #ff4c4c
        color white
        border-radius 4px
</style>

<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          showSth2: true
        }
      },
      methods: {
        showfb2: function () {
          this.$emit('hidepl2', false)
        }
      }
    }
</script>

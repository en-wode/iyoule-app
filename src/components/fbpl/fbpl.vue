<template lang="html">
    <div class="fb" v-show="showSth" @touchmove.prevent @click="showfb">
      <div class="dise" @click.stop="">
        <input type="text" class="bt" placeholder="标题（选填）">
        <textarea type="text" class="nr" placeholder="留下你对本书的看法以及感受" @input="descInput" maxlength="200" v-model="desc"></textarea>
        <p class="fr"><span>{{textnum}}/200</span><input type="button" value="发表" class="tj"></p>
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
      width 100%
      height 280px
      background white
      overflow  hidden
      input
        width 90%
        height 25px
        padding 1px 5px
        margin 15px auto
        display block
        background-color #f5f0f0
        color #998282
      textarea
        width 90%
        height 25px
        margin 15px auto
        background-color #f5f0f0
        display block
        color #998282
        border none
        padding 4px 5px
      .nr
        height 140px
      .tj
        display inline-block
        width 50px
        background #ff4c4c
        color white
        margin 0 15px
        border-radius 4px
</style>

<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          textnum: 0,
          showSth: true,
          desc: ''
        }
      },
      methods: {
        descInput () {
          var txtVal = this.desc.length
          this.textnum = 200 - txtVal
        },
        showfb: function () {
          this.$emit('hidepl', false)
        }
      }
    }
</script>

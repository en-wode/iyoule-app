<template lang="html">
    <div class="shareall" @touchmove.prevent v-show="showshare" @click="sshare" >
      <div class="share" @click.stop="">
        <div class="share_contain">
          <h2>分享到</h2>
          <div class="ob">
            <li><img src="../../components/share/QQ.png" alt="QQ好友" width="42" height="42"><span>QQ好友</span></li>
            <li><img src="../../components/share/QQspace.png" alt="QQ空间" width="42" height="42"><span>QQ空间</span></li>
            <li><img src="../../components/share/wx.png" alt="微信" width="42" height="42"><span>微信</span></li>
            <li><img src="../../components/share/moments.png" alt="朋友圈" width="42" height="42"><span>朋友圈</span></li>
            <li><img src="../../components/share/weibo.png" alt="微博" width="42" height="42"><span>微博</span></li>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
.shareall
  width 100%
  height 100%
  background rgba(140,140,140,0.5)
  position fixed
  top 55px
  z-index 100
  .share
    position fixed
    bottom 0
    height 125px
    width 100%
    background white
    h2
      border-bottom 1px solid #9c9797
      width 90%
      margin 0 auto
      padding-bottom 8px
      padding-top 8px
    .ob
      width 100%
      display flex
      text-align center
      li
        flex 1
        float left
        text-align center
        margin-top 8px
        img
          display block
          margin 0 auto 8px auto
        span
          font-size 14px
</style>

<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          showshare: false
        }
      },
      methods: {
        sshare: function () {
          this.$emit('hidefx', false)
        }
      }
    }
</script>

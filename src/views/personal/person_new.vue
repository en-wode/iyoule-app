<template>
  <div>
    <d-head></d-head>
    <div class="contain">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">充值记录</mt-tab-item>
        <mt-tab-item id="2">消费记录</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <ul class="jilu">
            <li>
              <p> <span class="user">书友8888</span>回复您：<span class="fr"><i class="icon-comment2"></i></span></p>
              <p class="neirong">温馨，舒服，每个人都向往的生活</p>
              <p>《余生，请多指教》<span>2017-5-15 15:00</span></p>
            </li>
            <li>
              <p> <span class="user">书友8888</span>回复您：<span class="fr"><i class="icon-comment2"></i></span></p>
              <p class="neirong">温馨，舒服，每个人都向往的生活温馨，舒服，每个人都向往的生活温馨，舒服，每个人都向往的生活</p>
              <p>《余生，请多指教》<span>2017-5-15 15:00</span></p>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <ul class="jilu">
            <li><i class="icon-yuan"></i>有乐4月稿费过万作者21人</li>
            <li><i class="icon-yuan"></i>有乐4月稿费过万作者21人</li>
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
        selected: '1'
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
    padding 0 20px 10px 20px
    font-size 12px
    margin 25px auto 12px auto
    border-1px(rgba(245,240,240,0.8))
    p
      line-height 22px
      height 22px
      color #a08c8c
      .user
        color #3b89ff
        margin-right 4px
    .neirong
      margin-left 24px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
    .icon-yuan
      color red
      font-size 12px
      margin-right 12px
</style>

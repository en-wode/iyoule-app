<template>
  <div>
    <d-head></d-head>
    <div class="personal">
      <div class=" consume">
        <p>账号ID <span class="fr">88888888</span></p>
        <p>头像<span class="fr">蹦擦蹦擦蹦擦擦<i class="icon-arrow"></i></span></p>
        <p>昵称<span class="fr">蹦擦蹦擦蹦擦擦<i class="icon-arrow"></i></span></p>
        <p>性别<span class="fr">男<i class="icon-arrow"></i></span></p>
        <p>生日<span class="fr">2000-02-29<i class="icon-arrow"></i></span></p>
        <p>绑定邮箱<span class="fr">381527994@qq.com<i class="icon-arrow"></i></span></p>
        <p>绑定手机<span class="fr">159*****3366<i class="icon-arrow"></i></span></p>
        <p>修改密码<span class="fr">88888888<i class="icon-arrow"></i></span></p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import detail from '../../components/home-header/detail-header.vue'
  export default {
    components: {
      'd-head': detail
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .personal
    margin-top 56px
    width  100%
    left 0
    overflow hidden
    background #fffefd
    z-index 100
    .consume
      width 100%
      p
        width 90%
        margin 0 auto
        height 42px
        line-height 42px
        border-1px(rgba(245,240,240,0.9))
        i
          font-size 16px
          color #998282
          vertical-align: middle
          margin-left 16px

</style>

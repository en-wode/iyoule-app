<template>
  <div>
    <d-head></d-head>
    <div class="personal">
      <div class="border_bottom member">
        当前等级：<span class="red">初级VIP</span>
        <input type="button" value="升级">
      </div>
      <div class="border_bottom vip">
        <h3>1、初级VIP会员</h3>
        <p>费用：一次性充值低于20元（2000阅读币），充值金额全部兑换成等额价值的阅读币。</p>
        <p>初级VIP会员权利：以4分每千字价格阅读有乐中文网VIP作品内容</p>
      </div>
      <div class="border_bottom vip">
        <h3>2、中级VIP会员</h3>
        <p>费用：一次性充值低于20元（2000阅读币），充值金额全部兑换成等额价值的阅读币。</p>
        <p>初级VIP会员权利：以4分每千字价格阅读有乐中文网VIP作品内容</p>
      </div>
      <div class="border_bottom vip">
        <h3>3、高级VIP会员</h3>
        <p>费用：一次性充值低于20元（2000阅读币），充值金额全部兑换成等额价值的阅读币。</p>
        <p>初级VIP会员权利：以4分每千字价格阅读有乐中文网VIP作品内容</p>
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
  .personal
    margin-top 56px
    width  100%
    left 0
    overflow hidden
    background #fffefd
    z-index 100
    .member
      line-height 26px
      padding 20px 20px
      input
        float right
        background #ff4c4c
        color white
        padding 2px 14px
        border-radius 4px
    .vip
      padding 24px 12px
      p
        color #b6a7a7
        height auto
        line-height 18px
        margin-top 16px
        font-size: 14px;

</style>

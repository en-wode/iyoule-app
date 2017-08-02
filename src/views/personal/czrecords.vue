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
            <li>30元<span>/3000有乐币 （微信支付）<i>2016-3-26 15:00</i></span></li>
            <li>30元<span>/3000有乐币 （微信支付）<i>2016-3-26 15:00</i></span></li>
            <li>30元<span>/3000有乐币 （微信支付）<i>2016-3-26 15:00</i></span></li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <ul class="jilu">
            <li>30元<span>/3000有乐币 （微信支付）<i>2016-3-26 15:00</i></span></li>
            <li>30元<span>/3000有乐币 （微信支付）<i>2016-3-26 15:00</i></span></li>
            <li>30元<span>/3000有乐币 （微信支付）<i>2016-3-26 15:00</i></span></li>
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
.jilu
  width 100%
  li
    padding 0 20px
    line-height 60px
    height 60px
    font-size 14px
    span
      font-size 12px
      color #998282
      i
        float right
</style>

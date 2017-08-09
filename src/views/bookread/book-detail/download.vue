<template lang="html">
    <div>
      <d-head title="下载" name="下载"></d-head>
      <div class="contain">
        <mt-checklist
          v-model="value"
          :options="options">
        </mt-checklist>
      </div>
      <div class="down">
        <div class="wd9">
          <p>已选：30章</p>
          <p>价格：0有乐币</p>
          <p>余额：20有乐币|45豆币（优先扣除豆币）</p>
          <input type="button" value="免费下载" class="inputall">
        </div>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../../common/stylus/mixin.styl"
  .contain
    background #f5f0f0
    margin-bottom 250px
    .mint-checklist-title
      margin 0
    .mint-cell
      background #f5f0f0
  .down
    position fixed
    left 0
    bottom 0
    background white
    width 100%
    box-shadow 0px 0px 7px 2px #bfbfbf
    .wd9
      padding-top 10px
      p
        line-height 38px
        border-1px(rgba(245,240,240,0.8))
        height 38px
      input
        margin 30px auto 50px auto
</style>

<script type="text/ecmascript-6">
  import detail from '@/components/home-header/detail-header.vue'
  export default{
    components: {
      'd-head': detail
    },
    data: function () {
      return {
        value: [],
        options: [{
          label: '1~30章 ',
          value: 'A',
          i: '1321'
        },
        {
          label: '1~30章',
          value: 'B'
        },
        {
          label: '1~30章',
          value: 'C'
        },
        {
          label: '1~30章',
          value: 'D'
        },
        {
          label: '1~30章',
          value: 'E'
        },
        {
          label: '10~20章',
          value: 'F'
        },
        {
          label: '1~30章',
          value: 'F'
        },
        {
          label: '1~30章',
          value: 'F'
        },
        {
          label: '60~100章',
          value: 'F'
        },
        {
          label: '100~300章',
          value: 'F'
        }
        ]
      }
    }
  }
</script>

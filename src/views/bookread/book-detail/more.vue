<template lang="html">
    <div>
      <div class="border_bottom">
        <mt-cell :title="'点击屏幕左下侧翻页'">
          <mt-switch v-model="value1" ></mt-switch>
        </mt-cell>
        <mt-cell :title="'音量键翻页'">
          <mt-switch v-model="value2" ></mt-switch>
        </mt-cell>
        <div class="fanye">翻页模式 <span class="fr">仿真 <i class="icon-arrow"></i></span></div>
      </div>
      <div>
        <div class="fanye">屏幕关闭时间 <span class="fr">5 min <i class="icon-arrow"></i></span></div>
        <mt-cell :title="'护眼模式'">
          <mt-switch v-model="value3" ></mt-switch>
        </mt-cell>
      </div>
      <input type="button" value="恢复默认设置" class="inputall" @click="tip">
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .fanye
    padding 0 10px
    height 48px
    line-height 48px
  input
    margin 180px auto 0 auto
</style>

<script type="text/ecmascript-6">
  import { Toast } from 'mint-ui'
  export default{
    data () {
      return {
        value1: false,
        value2: false,
        value3: true
      }
    },
    methods: {
      tip () {
        Toast('设置成功')
      }
    }
  }
</script>

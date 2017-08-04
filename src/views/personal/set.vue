<template>
  <div>
    <d-head></d-head>
    <div class="contain">
      <div class="fanye" @click="$router.push({path:'/tuisong',query:{bang:'tuisong'}})">消息推送设置 <span class="fr"> <i class="icon-arrow"></i></span></div>
      <mt-cell :title="'仅wifi环境下加载图片'">
        <mt-switch v-model="value1" ></mt-switch>
      </mt-cell>
      <div class="fanye" @click="$router.push({path:'/tuisong',query:{bang:'like'}})">偏好设置 <span class="fr"> <i class="icon-arrow"></i></span></div>
      <mt-cell :title="'跟随系统亮度'">
        <mt-switch v-model="value2" ></mt-switch>
      </mt-cell>
      <div class="light">
        <div class="book_light">
          <i class="icon-bulb-an a"></i>
          <div class="range">
            <mt-range
              v-model="rangeValue"
              :min="1"
              :max="90"
              :step="1"
              :bar-height="2">
            </mt-range>
          </div>
          <i class="icon-bulb"></i>
        </div>
      </div>
      <div class="fanye">检查更新 <span class="fr"> <i class="icon-arrow"></i></span></div>
      <div class="fanye">关于有乐 <span class="fr"> <i class="icon-arrow"></i></span></div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import detail from '../../components/home-header/detail-header.vue'
  export default {
    data () {
      return {
        rangeValue: 1,
        selected: '1',
        value1: false,
        value2: true
      }
    },
    components: {
      'd-head': detail
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .light
    padding 4px 10px 20px 10px
    border-1px(rgba(245,240,240,0.9))
    .book_light
      width 100%
      display flex
      .range
        flex 2.5
      i
        flex 0.3
        font-size 24px
  .fanye
    padding 0 10px
    height 48px
    line-height 48px
  input
    margin 180px auto 0 auto
</style>

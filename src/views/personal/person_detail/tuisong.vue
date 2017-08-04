<template lang="html">
    <div>
      <d-head></d-head>
      <div class="contain">
        <div v-if="this.$route.query.bang == 'like'">
          <mt-radio
            v-model="value1"
            align="right"
            :options="options">
          </mt-radio>
        </div>
        <div v-else>
          <mt-cell :title="'消息推送'">
            <mt-switch v-model="new1" ></mt-switch>
          </mt-cell>
          <mt-cell :title="'书架更新提醒'">
            <mt-switch v-model="new2" ></mt-switch>
          </mt-cell>
          <mt-cell :title="'活动提醒'">
            <mt-switch v-model="new3" ></mt-switch>
          </mt-cell>
        </div>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">

</style>

<script type="text/ecmascript-6">
  import detail from '../../../components/home-header/detail-header.vue'
  export default {
    data () {
      return {
        value1: 'A',
        new1: false,
        new2: true,
        new3: true
      }
    },
    components: {
      'd-head': detail
    },
    created () {
      this.options = [
        {
          label: '男频',
          value: 'A'
        },
        {
          label: '女频',
          value: 'B'
        }
      ]
    }
  }
</script>

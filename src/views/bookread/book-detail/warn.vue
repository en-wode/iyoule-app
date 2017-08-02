<template lang="html">
    <div>
      <div class="border_bottom">
        <div class="wd9">
          <h1>沙海</h1>
          <p>章节：120章 武魂觉醒</p>
        </div>
      </div>
      <div class="leix">
        <h2>选择错误类型 <span>（可多选）</span></h2>
        <mt-checklist
          v-model="value"
          align="right"
          :options="options">
        </mt-checklist>
        <input type="button" value="提交反馈" @click="tip" class="inputall">
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .border_bottom

    .wd9
      margin 25px 0
      font-size 18px
      p
        font-size 16px
        margin-top 13px
  .leix
    h2
      margin 12px 20px
      color #998282
  input
    margin 80px auto 0 auto
</style>

<script type="text/ecmascript-6">
    import { Toast } from 'mint-ui'
    export default{
      data: function () {
        return {
          value: [],
          options: [{
            label: '章节标题与内容不符',
            value: 'A'
          },
          {
            label: '内容缺失',
            value: 'B'
          },
          {
            label: '章节重复',
            value: 'C'
          },
          {
            label: '章节顺序错乱',
            value: 'D'
          },
          {
            label: '存在大量乱码',
            value: 'E'
          },
          {
            label: '包含色情内容',
            value: 'F'
          }
          ]
        }
      },
      methods: {
        tip () {
          Toast('提交成功')
        }
      }
    }
</script>

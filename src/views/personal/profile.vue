<template>
  <div>
    <d-head></d-head>
    <div class="personal">
      <div class=" consume">
        <p>账号ID <span class="fr">88888888</span></p>
        <p >头像<span class="fr">蹦擦蹦擦蹦擦擦<i class="icon-arrow"></i></span></p>
        <p @click="$router.push({path:'/ziliao',query:{bang:'name'}})">昵称<span class="fr">蹦擦蹦擦蹦擦擦<i class="icon-arrow"></i></span></p>
        <p @click="$router.push({path:'/ziliao',query:{bang:'sex'}})">性别<span class="fr">男<i class="icon-arrow"></i></span></p>
        <mt-button @click.native="open('picker')" size="large"><span class="fl">生日</span><span class="fr">{{value.toLocaleString()}}<i class="icon-arrow"></i></span></mt-button>
        <p @click="$router.push({path:'/ziliao',query:{bang:'email'}})">绑定邮箱<span class="fr">381527994@qq.com<i class="icon-arrow"></i></span></p>
        <p @click="$router.push({path:'/ziliao',query:{bang:'phone'}})">绑定手机<span class="fr">159*****3366<i class="icon-arrow"></i></span></p>
        <p @click="$router.push({path:'/ziliao',query:{bang:'password'}})">修改密码<span class="fr">88888888<i class="icon-arrow"></i></span></p>
      </div>
    </div>
    <mt-datetime-picker
      ref="picker"
      type="date"
      v-model="value"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      :startDate="startDate"
      :endDate="endDate"
      @confirm="handleChange">
    </mt-datetime-picker>
  </div>
</template>

<script type="text/ecmascript-6">
  import detail from '../../components/home-header/detail-header.vue'
  import { Toast } from 'mint-ui'
  export default {
    data () {
      return {
        value: new Date('2017'),
        startDate: new Date('1970'),
        endDate: new Date('2017')
      }
    },
    components: {
      'd-head': detail
    },
    methods: {
      open (picker) {
        this.$refs[picker].open()
      },
      handleChange (value) {
        Toast({
          message: '已选择 ' + value.toLocaleString(),
          position: 'bottom'
        })
      }
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

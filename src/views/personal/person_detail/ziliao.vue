<template lang="html">
    <div>
      <d-head></d-head>
      <div class="contain">
        <div v-if="this.$route.query.bang == 'sex'" class="sex">
          <div @click="tip">
            <mt-radio
              v-model="value1"
              align="right"
              :options="options">
            </mt-radio>
          </div>
        </div>
        <div v-if="this.$route.query.bang == 'name'" class="name">
          <input type="text" class="nemail" placeholder="请输入新昵称">
          <input type="button" value="确定" class="inputall" @click="tip">
        </div>
        <div v-if="this.$route.query.bang == 'email'" class="email">
          <input type="text" class="nemail" placeholder="请输入邮箱">
          <input type="button" value="确定" class="inputall" @click="tip">
        </div>
        <div v-if="this.$route.query.bang == 'phone'" class="phone">
          <input type="text" class="nemail" placeholder="请输入手机号">
          <mt-field placeholder="输入验证码">
            <div style="" class="yzcode">获取验证码</div>
          </mt-field>
          <input type="button" value="确定" class="inputall" @click="tip">
        </div>
        <div v-if="this.$route.query.bang == 'password'" class="password">
          <input type="text" class="nemail" placeholder="请输入旧密码">
          <input type="text" class="nemail new" placeholder="请输入新密码">
          <input type="button" value="确定" class="inputall" @click="tip">
          <p>通过手机号找回</p>
        </div>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
.email,.name,.phone,.password
  .nemail
    border 1px solid #998282
    display block
    text-indent:1em;
  input
    height 42px
    width 90%
    margin 60px auto 40px auto
    border-radius 4px
  .new
    margin-top 20px
  .inputall
    margin-top 40px
  p
    text-align center
    color #3b89ff
.mint-field
  width: 90%;
  margin: 0 auto;
  .yzcode
    width: 100px;
    height: 40px;
    background: #ccc2c2
    text-align center
    line-height 40px
    font-size 14px
    border-radius 4px
    color white
</style>

<script type="text/ecmascript-6">
  import detail from '../../../components/home-header/detail-header.vue'
  import { Toast } from 'mint-ui'
  export default{
    data () {
      return {
        value1: 'A'
      }
    },
    components: {
      'd-head': detail
    },
    created () {
      this.options = [
        {
          label: '男',
          value: 'A'
        },
        {
          label: '女',
          value: 'B'
        }
      ]
    },
    methods: {
      tip () {
        Toast('修改成功')
      }
    }
  }
</script>

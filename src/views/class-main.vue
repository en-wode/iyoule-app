<template lang="html">
  <div>
    <!--<personal></personal>-->
    <d-head v-if="this.$route.query.bang"></d-head>
    <div v-else>
      <v-head v-if="this.$route.query.class"></v-head>
      <p-head v-else></p-head>
    </div>
    <div class="contain">
      <router-view></router-view>
    </div>
    <div class="bottom" v-if="this.$route.query.bang =='book'">
      <li><span class="shidu">免费试读</span></li>
      <li><span class="down">全本下载</span></li>
    </div>
    <v-bottom v-else></v-bottom>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .bottom
    position fixed
    left 0
    bottom 0
    height 48px
    width 100%
    box-shadow 0px -4px 2px rgb(230,230,230)
    display flex
    background white
    z-index 99
    li
      float left
      flex 1
      height 48px
      text-align center
      .shidu
        display block
        height 22px
        line-height 22px
        margin-top 12px
        border-right 1px solid #d2d8e8
      .down
        display block
        height 22px
        line-height 22px
        margin-top 12px
</style>

<script type="text/ecmascript-6">
  import head from '../components/home-header/home-header.vue'
  import person from '../components/home-header/person-header.vue'
  import detail from '../components/home-header/detail-header.vue'
  import bottom from '../components/bottom/bottom.vue'
  import personal from './personal/personal.vue'
  export default {
    components: {
      'v-head': head,
      'p-head': person,
      'd-head': detail,
      'v-bottom': bottom,
      personal
    },
    methods: {
      show () {

      }
    }
  }
</script>

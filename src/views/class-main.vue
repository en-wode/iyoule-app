<template lang="html">
  <div>
    <transition name="slide">
      <personal v-if="show" @hide='onShow'></personal>
    </transition>
    <transition name="slide-fade">
      <fbpl v-if="show2" @hidepl='ishowpl'></fbpl>
      <hfpl v-if="show3" @hidepl2='ishowpl2'></hfpl>
    </transition>
    <d-head v-if="this.$route.query.bang||this.$route.query.book" @isshowpl="ishowpl"></d-head>
    <div v-else>
      <v-head v-if="this.$route.query.class"></v-head>
      <p-head @selectshow='onShow' v-else ></p-head>
    </div>
    <div class="contain">
      <router-view @isshowpl="ishowpl" @isshowpl2="ishowpl2" @isshowfx2="hideffx"></router-view>
    </div>
    <div class="bottom" v-if="this.$route.query.book == 'book'">
      <li><span class="shidu">免费试读</span></li>
      <li><span class="down">全本下载</span></li>
    </div>
      <v-bottom v-if="this.$route.query.book == null"></v-bottom>
    <div class="fxd">
      <transition name="slide">
        <share @hidefx="hideffx" v-show="show4"></share>
      </transition>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .slide-enter-active
    transition: all .3s ease;
  .slide-leave-active
    transition: all .3s ease;
  .slide-enter, .slide-leave-to
    transform: translateX(-100%)
  .slide-fade-enter-active,.slide-fade-leave-active
    transition: all .3s ease;
    tansition: opacity .5s
  .slide-fade-enter
    transform: translateY(-100px)
    opacity 0
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
  .fxd
    .slide-enter-active
      transition: all .2s ease;
    .slide-leave-active
      transition: all 0s ease;
    .slide-enter, .slide-leave-to
      transform: translateY(60px)
</style>

<script type="text/ecmascript-6">
  import head from '../components/home-header/home-header.vue'
  import fbpl from '../components/fbpl/fbpl'
  import hfpl from '../components/fbpl/hfpl'
  import share from '../components/share/share'
  import person from '../components/home-header/person-header.vue'
  import detail from '../components/home-header/detail-header.vue'
  import bottom from '../components/bottom/bottom.vue'
  import personal from './personal/personal.vue'
  export default {
    data: function () {
      return {
        show: false,
        show2: false,
        show3: false,
        show4: false
      }
    },
    components: {
      'v-head': head,
      'p-head': person,
      'd-head': detail,
      'v-bottom': bottom,
      personal,
      fbpl,
      hfpl,
      share
    },
    methods: {
      onShow: function (abc) {
        this.show = abc
      },
      ishowpl: function (fb) {
        this.show2 = fb
      },
      ishowpl2: function (hf) {
        this.show3 = hf
      },
      hideffx: function (fx) {
        this.show4 = fx
      }
    }
  }
</script>

<template lang="html">
    <div class="header">
      <ul>
        <router-link to="/bookcity" tag="li" ><span>首页</span></router-link>
        <li  @click="$router.push({path:'/bookcity',query:{class:'nan'}})"><span :class="[aclick === 'nan'? 'head-active':'']">男频</span></li>
        <li  @click="$router.push({path:'/bookcity',query:{class:'nv'}})"><span :class="[aclick === 'nv'? 'head-active':'']">女频</span></li>
        <li @click="$router.push({path:'/free',query:{class:'free'}})"><span :class="[aclick === 'free'? 'head-active':'']">免费</span></li>
        <li  @click="$router.push({path:'/classify',query:{class:'classify'}})"><span :class="[aclick === 'classify'? 'head-active':'']">分类</span></li>
        <router-link class="search" tag="li" to="/search">
          <span class="icon-search"></span>
        </router-link>
      </ul>
      <div class="search">
      </div>
    </div>
  <!--<mt-header fixed >
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>-->
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .header
    height 55px
    background #2e2727
    position fixed
    width 100%
    top 0
    left 0
    z-index 99
    ul
      width 100%
      display flex
      li
        float left
        color white
        font-size 16px
        flex 1
        line-height 55px
        text-align center
        .head-active
          display inline-block
          border-bottom 2px solid red
          height 53px
      .search
        flex 0 0 50px
        font-size 24px


</style>

<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          aclick: this.$route.query.class
        }
      }
    }
</script>

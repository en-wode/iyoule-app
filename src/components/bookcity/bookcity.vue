<template lang="html">
  <div>
    <div class="bookcity">
      <div class="list">
        <mt-swipe :auto="4000">
          <mt-swipe-item>1</mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="classify">
        <ul v-if="this.$route.query.class">
          <router-link to="/bookcity-classify/nan" tag="span" class="nan" >玄幻</router-link>
          <router-link to="/bookcity-classify/nv" tag="span" class="nv">都市</router-link>
          <router-link to="/home" tag="span" class="free">灵异</router-link>
          <router-link to="/home" tag="span" class="icon-classify">历史</router-link>
          <router-link to="/home" tag="span" class="icon-classify">仙侠</router-link>
        </ul>
        <ul v-else>
          <li @click="$router.push({path:'/bookcity',query:{class:'nan'}})" class="nan" >男频</li>
          <li @click="$router.push({path:'/bookcity',query:{class:'nv'}})" class="nv">女频</li>
          <li @click="$router.push({path:'/free',query:{class:'free'}})" class="free">免费</li>
          <li @click="$router.push({path:'/classify',query:{class:'classify'}})" class="icon-classify">分类</li>
        </ul>
      </div>
      <div class="tj">
        <h1>主编推荐</h1>
        <vertical></vertical>
      </div>
      <div class="tj">
        <h1>主编推荐</h1>
        <transverse></transverse>
      </div>
      <fuse></fuse>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .list
    width 100%
    height 120px
  .classify
    width 100%
    border-bottom 8px solid #f5f0f0
    ul
      width 90%
      margin 24px auto
      display flex
      li
        flex 1
        text-align center
        width 67px
        line-height 45px
        margin-right 20px
        border-radius 6px
        color white
        &.nan
          background url("nan.png")
        &.nv
          background url("nv.png")
        &.free
          background url("free.png")
        &.icon-classify
          background url("icon-classify.png")
        &:nth-child(4)
          margin-right 0
      span
        flex 1
        text-align center
        width 42px
        line-height 20px
        margin-right 20px
        border-radius 3px
        border:1px solid #998282
        &:nth-child(5)
          margin-right 0
  .tj
    width 100%
    h1
      margin: 20px 0 0px 18px;
      padding-right: 9px;
      display: inline-block;
      border-right: 2px solid #ff4c4c;
</style>

<script type="text/ecmascript-6">
  import vertical from '@/components/vertical-recommend/vertical_recommend'
  import transverse from '@/components/transverse-recommend/transverse_recommend'
  import fuse from '@/components/fuse-recommend/fuse_recommend'
  export default{
    components: {
      vertical,
      transverse,
      fuse
    }
  }
</script>

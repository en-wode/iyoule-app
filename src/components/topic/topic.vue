<template lang="html">
    <div class="ys">
      <div class="topic" @click="$router.push({path:'/topic-content',query:{bang:'content'}})">
        <h2>一起成功：不仅有颜值还有才气</h2>
        <img src="../../components/topic/top_1.png" alt="" width="330" height="100">
      </div>
      <div class="topic" @click="$router.push({path:'/topic-content',query:{bang:'content'}})">
        <h2>一起成功：不仅有颜值还有才气</h2>
        <img src="../../components/topic/top_1.png" alt="" width="330" height="100">
      </div>
      <div class="topic" @click="$router.push({path:'/topic-content',query:{bang:'content'}})">
        <h2>一起成功：不仅有颜值还有才气</h2>
        <img src="../../components/topic/top_1.png" alt="" width="330" height="100">
      </div>
      <div class="topic" @click="$router.push({path:'/topic-content',query:{bang:'content'}})">
        <h2>一起成功：不仅有颜值还有才气</h2>
        <img src="../../components/topic/top_1.png" alt="" width="330" height="100">
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .topic
    width 90%
    margin 0 auto
    padding-bottom 14px
    border-1px(rgba(245,240,240,0.9))
    h2
      padding 14px 0
      font-size 14px

</style>

<script type="text/ecmascript-6">
    export default{
    }
</script>

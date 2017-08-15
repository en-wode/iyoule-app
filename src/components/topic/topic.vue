<template lang="html">
    <div class="ys">
      <div class="topic" @click="$router.push({path:'/topic-content',query:{bang:'content'}})" v-for="item in list">
        <h2>一起成功：不仅有颜值还有才气</h2>
        <img v-lazy="item" width="100%" height="100">
      </div>
<!--      <div class="topic" @click="$router.push({path:'/topic-content',query:{bang:'content'}})">
        <h2>一起成功：不仅有颜值还有才气</h2>
        <img src="../../components/topic/top_1.png" alt="" width="330" height="100">
      </div>
      <div class="topic" @click="$router.push({path:'/topic-content',query:{bang:'content'}})" >
        <h2>一起成功：不仅有颜值还有才气</h2>
        <img src="../../components/topic/top_1.png" alt="" width="330" height="100" >
      </div>
      <div class="topic" @click="$router.push({path:'/topic-content',query:{bang:'content'}})">
        <h2>一起成功：不仅有颜值还有才气</h2>
        <img src="../../components/topic/top_1.png" alt="" width="330" height="100">
      </div>
      <div class="topic" @click="$router.push({path:'/topic-content',query:{bang:'content'}})">
        <h2>一起成功：不仅有颜值还有才气</h2>
        <img  alt="" width="330" height="100" >
      </div>-->
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
    image [lazy=loading] {
      width 100%
      height 100px
    }
  @media screen and (max-width: 320px)
    .topic
      img
        width 100%
        height 88px
</style>

<script type="text/ecmascript-6">
    export default{
      data () {
        return {
          list: [
            'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
            'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
            'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
            'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg',
            'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
            'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
            'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
            'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
            'http://fuss10.elemecdn.com/b/df/b630636b444346e38cef6c59f6457jpeg.jpeg',
            'http://fuss10.elemecdn.com/7/a5/596ab03934612236f807b92906fd8jpeg.jpeg'
          ]
        }
      }
    }
</script>

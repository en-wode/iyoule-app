<template lang="html">
  <div>
    <div class="paihang">
        <ul>
          <li @click="$router.push({path:'/detail',query:{bang:'hit'}})" class="nan" ><i class="icon-hit"></i>点击榜</li>
          <li @click="$router.push({path:'/detail',query:{bang:'score'}})" class="nv"><i class="icon-score"></i>评分榜</li>
          <li @click="$router.push({path:'/detail',query:{bang:'ticket'}})" class="free"><i class="icon-ticket"></i>月票榜</li>
          <li @click="$router.push({path:'/detail',query:{bang:'reward'}})" class="icon-classify"><i class="icon-reward"></i>打赏榜</li>
        </ul>
    </div>
    <div class="new">
      <div>
        <h1>男频</h1>
      </div>
      <ul @click="$router.push({path:'/detail',query:{bang:'hit'}})">
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="55" height="70"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <p>玄幻小说</p>
      </ul>
      <ul @click="$router.push({path:'/detail',query:{bang:'hit'}})">
        <li ><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="55" height="70"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <p>玄幻小说</p>
      </ul>
      <ul @click="$router.push({path:'/detail',query:{bang:'hit'}})">
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="55" height="70"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <p>玄幻小说</p>
      </ul>
      <ul @click="$router.push({path:'/detail',query:{bang:'hit'}})">
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="55" height="70"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <p>玄幻小说</p>
      </ul>
      <ul @click="$router.push({path:'/detail',query:{bang:'hit'}})">
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="55" height="70"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <p>玄幻小说</p>
      </ul>
    </div>
    <div class="new">
      <div>
        <h1>女频</h1>
      </div>
      <ul @click="$router.push({path:'/detail',query:{bang:'hit'}})">
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="55" height="70"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <p>玄幻小说</p>
      </ul>
      <ul @click="$router.push({path:'/detail',query:{bang:'hit'}})">
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="55" height="70"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <p>玄幻小说</p>
      </ul>
      <ul @click="$router.push({path:'/detail',query:{bang:'hit'}})">
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="55" height="70"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <p>玄幻小说</p>
      </ul>
      <ul @click="$router.push({path:'/detail',query:{bang:'hit'}})">
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="55" height="70"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <p>玄幻小说</p>
      </ul>
      <ul>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="55" height="70"></li>
        <li><img src="../../components/classify/baser_cover.png" alt="" width="42" height="54"></li>
        <p>玄幻小说</p>
      </ul>
    </div>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .paihang
    width 100%
    border-bottom 8px solid #f5f0f0
    ul
      width 90%
      margin 16px auto
      display flex
      font-size 14px
      li
        flex 1
        text-align center
        line-height 45px
        margin-right 12px
        color #9c9797
        i
          font-size 24px
          vertical-align: middle;
  .new
    width 90%
    margin 0 auto
    &:last-child
      margin-bottom 52px
    h1
      margin 20px 0 0 0
      padding-right 9px
      border-right 2px solid #ff4c4c
      display inline-block
    ul
      width 30%
      height 105px
      margin-top 23px
      position relative
      display inline-block
      border-bottom 1px  solid #f5f0f0
      li
        position absolute
        &:nth-child(1)
          left 0
          top 16px
        &:nth-child(2)
          left 20px
          z-index 20
        &:nth-child(3)
          left 50px
          top 16px
      p
        position absolute
        top 76px
        left 24px
        font-size 12px
        text-align center
</style>

<script type="text/ecmascript-6">
  export default{
  }
</script>

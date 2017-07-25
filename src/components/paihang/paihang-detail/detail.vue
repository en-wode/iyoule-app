<template>
  <div class="detail">
    <div class="sex">
      <div class="selec-top">
        <span @click="$router.push({path:'/detail',query:{bang:bang,class:'nan'}})" class="sex_detail">男生</span>
        <span @click="$router.push({path:'/detail',query:{bang:bang,class:'nv'}})" class="sex_detail">女生</span>
        <!--<span @click="$router.push({path:'/detail',query:{bang:bang,class:'nan'}})" class="sex_detail">排序方式</span>
        <span @click="$router.push({path:'/detail',query:{bang:bang,class:'nv'}})" class="sex_detail">筛选</span>-->
      </div>
      <!--<div class="select">
        <div class="show"><span>按人气</span><span class="icon-arrow fr"></span></div>
        <div class="show">按收藏<span class="icon-arrow fr"></span></div>
        <div class="show">按字数<span class="icon-arrow fr"></span></div>
        <div class="show">按更新<span class="icon-arrow fr"></span></div>
      </div>-->
      <div class="select">
        <div class="show">状态 <span>连载</span><span>已完结</span> </div>
        <div class="show">价格 <span>连载</span><span>已完结</span><span>连载</span></div>
        <div class="show">更新 <span>三天内</span><span>一周内</span></div>
        <div class="show">字数 <span>50w以下</span><span>50-100w</span></div>
      </div>
    </div>
    <ul>
      <li>
        <img src="../../../components/paihang/paihang-detail/baser_cover.png" alt="" width="88" height="110">
        <h2>修罗天帝{{this.$route.query.class}}</h2>
        <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
        <span class="fl">实验小白鼠</span>
        <span class="fr label">爽文、热血</span>

      </li>
      <li>
        <img src="../../../components/paihang/paihang-detail/baser_cover.png" alt="" width="88" height="110">
        <h2>修罗天帝{{this.$route.query.class}}</h2>
        <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
        <span class="fl">实验小白鼠</span>
        <span class="fr label">爽文、热血</span>
      </li>
      <li>
        <img src="../../../components/paihang/paihang-detail/baser_cover.png" alt="" width="88" height="110">
        <h2>修罗天帝{{this.$route.query.class}}</h2>
        <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
        <span class="fl">实验小白鼠</span>
        <span class="fr label">爽文、热血</span>
      </li>
      <li>
        <img src="../../../components/paihang/paihang-detail/baser_cover.png" alt="" width="88" height="110">
        <h2>修罗天帝{{this.$route.query.class}}</h2>
        <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
        <span class="fl">实验小白鼠</span>
        <span class="fr label">爽文、热血</span>
      </li>
      <li>
        <img src="../../../components/paihang/paihang-detail/baser_cover.png" alt="" width="88" height="110">
        <h2>修罗天帝{{this.$route.query.class}}</h2>
        <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
        <span class="fl">实验小白鼠</span>
        <span class="fr label">爽文、热血</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data: function () {
      var bang = this.$route.query.bang
      return {
        bang: bang
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../../common/stylus/mixin.styl"
  .detail
    .sex
      height 41px
      border-bottom 1px solid #f5f0f0
      position relative
      .selec-top
        box-shadow 0 0 3px 3px #f0efee
      .sex_detail
        display inline-block
        width 49%
        line-height 41px
        text-align center
        &:first-child
          border-right 1px solid #f5f0f0
      .select
        width 100%
        position absolute!important
        top 46px
        background white
        border-1px(#f5f0f0)
        .show
          width 90%
          margin 0 auto
          line-height 40px
          border-1px(rgba(245,240,240,0.9))
          .icon-arrow
            font-size: 28px;
            line-height: 38px;
          span
            font-weight 400
            font-size 12px
    ul
      padding-bottom 24px
      width 90%
      margin 0 auto
      li
        height 110px
        padding 24px 0 24px 0
        border-bottom 1px solid #e7eaf2
        img
          margin-right 12px
        h2
          font-size 16px
          margin-bottom 12px
        h2,p,img
          float left
        p
          width 225px
          height 48px
          font-size 12px
          line-height 15px
        span
          font-size 12px
          margin-top 20px
        .total
          display inline-block
          padding-right 10px
          border-right 1px solid #ccc
        .label
          display inline-block
          color #ff4c4c
          border 1px solid #ff4c4c
          padding 2px
          border-radius 2px
</style>

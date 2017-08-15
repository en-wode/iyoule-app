<template>
  <div class="detail">
    <div class="sex">
      <div class="selec-top">
        <!--<div>
          <span @click="$router.push({path:'/detail',query:{bang:bang,class:'nan'}})" class="sex_detail">男生</span>
          <span @click="$router.push({path:'/detail',query:{bang:bang,class:'nv'}})" class="sex_detail">女生</span>
        </div>-->
        <span class="sex_detail" @click="isshow('paixu')">排序方式</span>
        <span class="sex_detail" @click="isshow('shaixuan')">筛选</span>
      </div>
      <transition name="slide">
      <div class="select" v-show="paixu">
          <div class="show">按人气<span class="icon-arrow fr"></span></div>
          <div class="show">按收藏<span class="icon-arrow fr"></span></div>
          <div class="show">按字数<span class="icon-arrow fr"></span></div>
          <div class="show">按更新<span class="icon-arrow fr"></span></div>
        </div>
      </transition>
      <transition name="slide">
      <div class="select" v-show="shaixuan">
          <div class="show">状态： <span class="classids" @click="state(0)" :class="stated === 0?'class_act':''">连载</span><span class="classids" @click="state(1)" :class="stated === 1?'class_act':''">已完结</span> </div>
          <div class="show">价格： <span class="classids" @click="price(0)" :class="priced === 0?'class_act':''">连载</span><span class="classids" @click="price(1)" :class="priced === 1?'class_act':''">已完结</span><span class="classids" @click="price(2)" :class="priced === 2?'class_act':''">连载</span></div>
          <div class="show">更新： <span class="classids" @click="update(0)" :class="updated === 0?'class_act':''">三天内</span><span class="classids" @click="update(1)" :class="updated === 1?'class_act':''">一周内</span></div>
          <div class="show">字数： <span class="classids" @click="charnum(0)" :class="charnumd === 0?'class_act':''">50w以下</span><span class="classids" @click="charnum(1)" :class="charnumd === 1?'class_act':''">50-100w</span></div>
        </div>
      </transition>
    </div>
    <ul @click="hidpx">
      <li>
        <img src="../../../components/paihang/paihang-detail/baser_cover.png" alt="" width="88" height="110" class="sm-img">
        <h2>修罗天帝{{this.$route.query.class}}123123</h2>
        <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
        <span class="fl">实验小白鼠</span>
        <span class="fr label">爽文、热血</span>
      </li>
      <li>
        <img src="../../../components/paihang/paihang-detail/baser_cover.png" alt="" width="88" height="110" class="sm-img">
        <h2>修罗天帝{{this.$route.query.class}}</h2>
        <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
        <span class="fl">实验小白鼠</span>
        <span class="fr label">爽文、热血</span>
      </li>
      <li>
        <img src="../../../components/paihang/paihang-detail/baser_cover.png" alt="" width="88" height="110" class="sm-img">
        <h2>修罗天帝{{this.$route.query.class}}</h2>
        <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
        <span class="fl">实验小白鼠</span>
        <span class="fr label">爽文、热血</span>
      </li>
      <li>
        <img src="../../../components/paihang/paihang-detail/baser_cover.png" alt="" width="88" height="110" class="sm-img">
        <h2>修罗天帝{{this.$route.query.class}}</h2>
        <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
        <span class="fl">实验小白鼠</span>
        <span class="fr label">爽文、热血</span>
      </li>
      <li>
        <img src="../../../components/paihang/paihang-detail/baser_cover.png" alt="" width="88" height="110" class="sm-img">
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
        bang: bang,
        paixu: false,
        shaixuan: false,
        stated: 0,
        priced: 0,
        updated: 0,
        charnumd: 0
      }
    },
    methods: {
      isshow (show) {
        if (show === 'paixu') {
          this.paixu = true
          this.shaixuan = false
        } else {
          this.paixu = false
          this.shaixuan = true
        }
      },
      hidpx () {
        this.paixu = false
        this.shaixuan = false
      },
      state (active) {
        this.stated = active
      },
      price (active) {
        this.priced = active
      },
      update (active) {
        this.updated = active
      },
      charnum (active) {
        this.charnumd = active
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../../common/stylus/mixin.styl"

  .detail
    .sex
      border-bottom 1px solid #f5f0f0
      position relative
      .slide-enter-active
        transition: all .3s ease;
      .slide-leave-active
        transition: all 0s ease;
      .slide-enter, .slide-leave-to
        transform: translateY(10px)
      .selec-top
        height 41px
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
        top 44px
        background white
        border-1px(#f5f0f0)
        box-shadow: 0px 3px 7px #bfbfbf
        .show
          width 90%
          margin 0 auto
          line-height 40px
          font-size 14px
          border-1px(rgba(245,240,240,0.9))
          .icon-arrow
            font-size: 16px;
            line-height: 38px;
          span
            font-weight 400
            font-size 12px
            display inline-block
            margin-left 20px
          .classids
            border: 1px solid #a59898;
            padding: 0 6px;
            border-radius 4px
            line-height: 20px;
          .class_act
            border: 1px solid red;
            color red
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

  @media screen and (max-width: 320px)
    .detail
      ul
        li
          p
            width 192px
          span
            margin-top 16px
</style>

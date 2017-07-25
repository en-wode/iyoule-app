<template>
  <div class="vertical">
    <h1>主编推荐</h1>
    <ul>
      <li>
        <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="88" height="110">
        <h2>修罗天帝{{this.$route.query.class}}</h2>
        <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
        <span class="fl">实验小白鼠</span>
        <span class="fr status">连载中</span>
        <span class="fr abc">207万字</span>
      </li>
      <li>
        <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="88" height="110">
        <h2>修罗天帝</h2>
        <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
        <span class="fl">实验小白鼠</span>
        <span class="fr status">连载中</span>
        <span class="fr abc">207万字</span>
      </li>
      <li>
        <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="88" height="110">
        <h2>修罗天帝</h2>
        <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
        <span class="fl">实验小白鼠</span>
        <span class="fr status">连载中</span>
        <span class="fr abc">207万字</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .vertical
    width 90%
    margin 0 auto
    h1
      margin 20px 0 0 0
      padding-right 9px
      display inline-block
      border-right 2px solid #ff4c4c
    ul
      padding-bottom 24px
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
        .status
          display inline-block
          padding-left 20px
</style>

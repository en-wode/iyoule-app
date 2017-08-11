<template>
  <div class="vertical">
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" @translate-change="translateChange" ref="loadmore">
        <ul>
          <li>
            <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="88" height="110" class="yiny">
            <h2>修罗天帝</h2>
            <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武asd asd asd ad asd asd asd asdasd as dsdf sdf </p>
            <span class="fl">实验小白鼠</span>
            <span class="fr status">连载中</span>
            <span class="fr abc">207万字</span>
          </li>
          <li>
            <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="88" height="110" class="yiny">
            <h2>修罗天帝</h2>
            <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
            <span class="fl">实验小白鼠</span>
            <span class="fr status">连载中</span>
            <span class="fr abc">207万字</span>
          </li>
          <li>
            <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="88" height="110" class="yiny">
            <h2>修罗天帝</h2>
            <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
            <span class="fl">实验小白鼠</span>
            <span class="fr status">连载中</span>
            <span class="fr abc">207万字</span>
          </li>
          <li>
            <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="88" height="110" class="yiny">
            <h2>修罗天帝</h2>
            <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
            <span class="fl">实验小白鼠</span>
            <span class="fr status">连载中</span>
            <span class="fr abc">207万字</span>
          </li>
          <li>
            <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="88" height="110" class="yiny">
            <h2>修罗天帝</h2>
            <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
            <span class="fl">实验小白鼠</span>
            <span class="fr status">连载中</span>
            <span class="fr abc">207万字</span>
          </li>
          <li>
            <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="88" height="110" class="yiny">
            <h2>修罗天帝</h2>
            <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
            <span class="fl">实验小白鼠</span>
            <span class="fr status">连载中</span>
            <span class="fr abc">207万字</span>
          </li>
          <li>
            <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="88" height="110" class="yiny">
            <h2>修罗天帝</h2>
            <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
            <span class="fl">实验小白鼠</span>
            <span class="fr status">连载中</span>
            <span class="fr abc">207万字</span>
          </li>
          <li>
            <img src="../../components/vertical-recommend/baser_cover.png" alt="" width="88" height="110" class="yiny">
            <h2>修罗天帝</h2>
            <p>八年前，雷霆古城一夜惊变，少城主秦明压入青云宗为仆，二十万民众赶进大青云山为奴。八年后，翠玲入武</p>
            <span class="fl">实验小白鼠</span>
            <span class="fr status">连载中</span>
            <span class="fr abc">207万字</span>
          </li>
        </ul>
      </mt-loadmore>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        topStatus: '',
        wrapperHeight: 0,
        translate: 0,
        moveTranslate: 0,
        list: [],
        bottomStatus: ''
      }
    },
    methods: {
      handleTopChange (status) {
        this.moveTranslate = 1
        this.topStatus = status
        this.bottomStatus = status
      },
      translateChange (translate) {
        const translateNum = +translate
        this.translate = translateNum.toFixed(2)
        this.moveTranslate = (1 + translateNum / 70).toFixed(2)
      },
      loadTop () {
        setTimeout(() => {
          let firstValue = this.list[0]
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i)
          }
          this.$refs.loadmore.onTopLoaded()
        }, 1500)
      }
    },
    mounted () {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>

    .vertical
      width 90%
      margin 0 auto 15px auto
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
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
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

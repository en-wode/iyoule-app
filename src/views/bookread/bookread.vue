<template lang="html">
    <div class="book_read" :class="bgselect === '2'?'background_col2':'' || bgselect === '3'?'background_col3':'' || bgselect === '4'?'background_col4':''" >
      <div class="book_head" v-show="show1">
        <div class="wd9">
          <i class="icon-arrow-left" @click="backHandle"></i>
          <span class="fr">
            <span class="buy" @click="toggle1('show2')">购买</span>
            <i class="icon-red_packet" @click="toggle1('show3')"></i>
            <i class="icon-menu" @click="toggle1('show4')"> <i class="path1"></i></i>
          </span>
          <div class="head_caozuo" v-show="show4">
            <ul>
              <li @click="tip('设置成功')"><i class="icon-update"></i>更新提醒</li>
              <li @click="tip('添加成功')"><i class="icon-mark"></i>添加书签</li>
              <li><i class="icon-subscription"></i>自动订阅</li>
              <li @click="showfx1"><i class="icon-share2"></i>分享</li>
              <li><i class="icon-notion"></i>显示想法</li>
              <li @click="$router.push({path:'/warn',query:{book:'warn'}})"><i class="icon-chapter_wrong"></i>章节报错</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="book_tip">
        <span class="fl">《丹武神尊》</span><span class="fr">第二章 战神之旅</span>
      </div>
      <div class="book_title">第一张 这是标题</div>
      <div class="book_contain" @click="toggle1('show1')">
        此刻，在辉煌会所，乌鸦正靠在一张大沙发上，手里端着一杯威士忌。 他脸上神情没有被八两金的坏消息左右，还是阴森森的笑容。 他的背后站着一排黑衣保镖，一个个膀大腰圆，腰里全都藏匿着武器。 而乌鸦的对面，坐着郭思思、
        高富帅和贾仁义一伙人，此刻，三人脸色正如六月乌云阴沉。 “郭小姐，高少爷，别这种不痛快的表...
      </div>
      <div class="buy_show" v-show="show2">
        <div class="border_bottom">
          <div class="chapter">
            <h2>沙海合集 <span class="fr" @click="toggle1('show2')">✘</span></h2>
            <div class="vipchapter">
              <p @click="brbuy('0')" :class="buynum === '0'?'kit_red':''"><a href="#" class="fl" @click="buyzhangj">-</a>{{buyzhang}}章 <a href="#" class="fr" @click="buyzhangz">+</a></p>
              <p @click="brbuy('40')" :class="buynum === '40'?'kit_red':''">40章  <i class="icon-bq"></i><span class="discount">8.5折</span></p>
              <p @click="brbuy('60')" :class="buynum === '60'?'kit_red':''">60章</p>
              <p @click="brbuy('1')" :class="buynum === '1'?'kit_red':''">80章</p>
            </div>
            <p class="fl"><i class="icon-help"></i>批量购买规则</p>
          </div>
        </div>
        <div class="border_bottom">
          <div class="price">
            <p>从 <span>90章 沙海</span> 开始购买</p>
            <p>价格：<span class="old">180有乐币</span> <span>168有乐币</span></p>
            <p>余额：300有乐币 150逗币</p>
          </div>
        </div>
        <div class="pay">
          <p>应支付：18有乐币（含150逗币）</p>
          <input type="button" value="购买" @click="tip('支付成功')">
        </div>
      </div>
      <div class="dashang" v-show="show3">
        <ul>
          <li @click="$router.push({path:'/operation',query:{book:'gift'}})">打赏红包</li>
          <li @click="$router.push({path:'/flower',query:{book:'flower'}})">送鲜花</li>
          <li @click="$router.push({path:'/operation',query:{book:'yuep'}})">投月票</li>
        </ul>
      </div>
      <div class="book_bottom" v-show="show1 && show5 === false && show3 === false">
        <transition name="fade">
          <div class="book_detail">
            <div class="book_back">
              <i class="icon-withdraw"></i>
            </div>
            <div class="book_now">
              <p>第365章 沙海</p>
              <p>{{chapterValue}}%</p>
            </div>
          </div>
        </transition>
        <div class="range">
          <mt-range
            v-model="chapterValue"
            :min="1"
            :max="100"
            :step="1"
            :bar-height="2">
            <div slot="start" @click="book_pre">上一章</div>
            <div slot="end" @click="book_next">下一章</div>
          </mt-range>
        </div>
        <div class="caozuo">
          <li @click="$router.push({path:'/mulu',query:{name:'书名'}})">
            <i class="icon-catalog"></i>
            <span>目录</span>
          </li>
          <li @click="toggle1('show5')">
            <i class="icon-font"></i>
            <span>设置</span>
          </li>
          <li>
            <i class="icon-comment2"></i>
            <span>评论</span>
          </li>
          <li @click="$router.push({path:'/download',query:{name:'下载'}})">
            <i class="icon-download"></i>
            <span>下载</span>
          </li>
        </div>
      </div>
      <div class="shezhi" v-show="show5">
        <div class="fen1" v-show="shezhi1">
          <div class="light">
            <div class="book_light">
              <i class="icon-bulb-an a"></i>
              <div class="range">
                <mt-range
                v-model="rangeValue"
                :min="1"
                :max="100"
                :step="1"
                :bar-height="2">
                </mt-range>
              </div>
              <i class="icon-bulb"></i>
              <span>系统</span>
            </div>
          </div>
          <div class="font"><a href="#" @click="fontj">A-</a><span>{{fontsz}}</span><a href="#" @click="fontz">A+</a><span class="fr lt">字体</span></div>
          <div class="background">
            <li>
              <span class="background_col1" @click="selecbg('1')"><i class="icon-gou red" v-show="bgselect === '1'"></i></span>
            </li>
            <li>
              <span class="background_col2" @click="selecbg('2')"><i class="icon-gou red" v-show="bgselect === '2'"></i></span>
            </li>
            <li>
              <span class="background_col3" @click="selecbg('3')"><i class="icon-gou red" v-show="bgselect === '3'"></i></span>
            </li>
            <li>
              <span class="background_col4" @click="selecbg('4')"><i class="icon-gou red" v-show="bgselect === '4'"></i></span>
            </li>
          </div>
        </div>
        <div class="fen2" v-show="shezhi2">
          <div class="space">
            <li @click="spaceg('big')" ><i class="icon-space_big"></i></li>
            <li @click="spaceg('middle')"><i class="icon-space_middle"></i></li>
            <li @click="spaceg('small')"><i class="icon-space_small"></i></li>
            <li @click="spaceg"><i class="icon-dege"></i></li>
          </div>
          <div class="mode">
            <li >
              <i class="icon-eye"></i>
              <span>护眼模式</span>
            </li>
            <li >
              <i class="icon-airead"></i>
              <span>自动阅读</span>
            </li>
            <li >
              <i class="icon-switch"></i>
              <span>横屏模式</span>
            </li>
            <li >
              <i class="icon-full_screen"></i>
              <span>全屏模式</span>
            </li>
          </div>
          <p @click="$router.push({path:'/more',query:{book:'more'}})">更多设置>></p>
        </div>
        <div class="fenye">
          <div class="fl fen" @click="toggle1('shezhi1')"></div>
          <div class="fr fen" @click="toggle1('shezhi2')"></div>
        </div>
      </div>
      <div class="book_dan " v-show="show6">
        <div class="border_bottom">
          <div class="wd9 top">
            <h2>136章 豪车如雨 <i class="fr">✘</i></h2>
            <p>价格：<span class="red">5有乐币</span></p>
            <p>余额：0有乐币  15逗币</p>
          </div>
        </div>
        <div>
          <mt-cell :title="'自动订阅下一章'">
            <mt-switch v-model="value1" ></mt-switch>
          </mt-cell>
          <div class="wd9 linh">批量购买 <span class="fr"> <i class="icon-arrow"></i></span></div>
          <p class="wd9 linh">应支付：<span class="red">5逗币</span></p>
          <input type="button" value="确认支付" class="inputall" @click="tip('支付成功')">
          <p class="wd9 tip">开通VIP立享折扣优惠！</p>
        </div>
      </div>
      <transition name="slide">
        <share  v-show="fx" @hidefx="hideffx1"></share>
      </transition>
    </div>
</template>
<script type="text/ecmascript-6">
  import share from '../../components/share/share'
  import { Toast } from 'mint-ui'
  import $ from 'jquery'
  export default{
    data: function () {
      return {
        rangeValue: 1,
        chapterValue: 1,
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        shezhi2: false,
        shezhi1: true,
        value1: false,
        zhangjie: false,
        fx: false,
        fontsz: 16,
        buyzhang: 20,
        buynum: 40,
        bgselect: 1
      }
    },
    components: {
      share
    },
    methods: {
      toggle1: function (select) {
        if (select === 'show1') {
          this.show1 = !this.show1
          this.show2 = false
          this.show3 = false
          this.show4 = false
          this.show5 = false
          $('.book_detail').css('opacity', '0')
        }
        if (select === 'show4') {
          this.show4 = !this.show4
          this.show2 = false
          this.show3 = false
        }
        if (select === 'show2') {
          this.show2 = !this.show2
          this.show3 = false
        }
        if (select === 'show3') {
          this.show3 = !this.show3
          this.show2 = false
        }
        if (select === 'show5') {
          this.show5 = !this.show5
          this.show2 = false
        }
        if (select === 'shezhi1') {
          this.shezhi1 = true
          this.shezhi2 = false
        }
        if (select === 'shezhi2') {
          this.shezhi2 = true
          this.shezhi1 = false
        }
      },
      backHandle () {
        this.$router.back()
      },
      tip (infor) {
        Toast(infor)
      },
      book_pre () {
        if (this.chapterValue === 1) {
          Toast('已经是第一章了')
          return
        }
        this.chapterValue--
      },
      book_next () {
        if (this.chapterValue === 100) {
          Toast('已经是最后一章了')
          return
        }
        this.chapterValue++
      },
      showfx1 () {
        this.fx = true
        this.show1 = false
      },
      hideffx1: function (fx) {
        this.fx = fx
      },
      fontz () {
        if (this.fontsz > 26) {
          return
        }
        this.fontsz++
        $('.book_contain').css('font-size', this.fontsz)
        $('.book_contain').css('line-height', this.fontsz + 8 + 'px')
      },
      fontj () {
        if (this.fontsz < 12) {
          return
        }
        this.fontsz--
        $('.book_contain').css('font-size', this.fontsz)
      },
      buyzhangj () {
        if (this.buyzhang === 1) {
          return
        }
        this.buyzhang--
      },
      buyzhangz () {
        this.buyzhang++
      },
      spaceg (jj) {
        if (jj === 'big') {
          $('.book_contain').css('line-height', this.fontsz + 20 + 'px')
        }
        if (jj === 'small') {
          $('.book_contain').css('line-height', this.fontsz + 10 + 'px')
        }
        if (jj === 'middle') {
          $('.book_contain').css('line-height', this.fontsz + 15 + 'px')
        }
      },
      brbuy (chapternum) {
        this.buynum = chapternum
      },
      selecbg (bg) {
        this.bgselect = bg
      }
    },
    mounted () {
      this.$nextTick(() => {
        $('.mode').click({
          width: 922,
          height: 600,
          elevation: 50,
          gradients: true,
          autoCenter: true
        })
      })
    },
    watch: {
      chapterValue: function () {
        $('.book_detail').css('opacity', '1')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../common/stylus/mixin.styl"
  .background_col1
    background #eece9b!important
  .background_col2
    background #c4e0c8!important
  .background_col3
    background #473a3a!important
    color white
  .background_col4
    background #141c26!important
    color white
  .book_read
    filter: brightness(90%);
    background #dfcba9
    min-height 100%
    .book_head
      background #2e2727
      position fixed
      color white
      top 0
      left 0
      width 100%
      height 55px
      line-height 55px
      .buy
        color #ec4848
        border 1px solid #ec4848
        font-size 12px
        padding 1px 8px
        border-radius 2px
        margin-right 20px
      i
        color white
        font-size 18px
        vertical-align: middle;
    .head_caozuo
      width 40%
      position absolute
      right 0%
      top 44px
      background #2e2727
      z-index: 1;
      li
        height 44px
        line-height 44px
        font-size 14px
        border-1px(rgba(245,240,240,0.2))
        i
          padding 6px
    .book_tip
      width 90%
      margin 0 auto
      padding 10px 0
      font-size 12px
      height 15px
    .book_title
      text-align center
    .book_contain
      width 90%
      margin: 8px auto 0px auto;
      padding-bottom 8px
      line-height 24px
      height 85%
    .buy_show
      position fixed
      width 100%
      left 0
      bottom 0
      z-index 100
      background white
      .chapter
        padding 18px 18px 32px 18px
        .vipchapter
          padding 18px 0
          height 130px
          i
            position: absolute;
            color red
            margin-left: 11px;
            font-size: 35px;
          .discount
            transform:rotate(40deg)
            -ms-transform:rotate(40deg) 	/* IE 9 */
            -moz-transform:rotate(40deg) 	/* Firefox */
            -webkit-transform:rotate(40deg) /* Safari 和 Chrome */
            -o-transform:rotate(40deg)
            font-size: 12px;
            line-height: 22px;
            position: absolute;
            margin-left: 18px;
            color white
          p
            border 1px solid #806c6c
            height 50px
            display inline-block
            width 120px
            float left
            text-align center
            line-height 50px
            border-radius 4px
            margin-bottom 20px
            padding 2px 8px
            &:nth-child(2),&:nth-child(4)
              float: right;
      .price
        padding 18px
        .old
          text-decoration: line-through
          color #998282
        p
          line-height 24px
          height 26px
          color #998282
          span
            color black
    .pay
      padding 18px
      input
        width 100%
        color white
        background #ff4c4c
        padding 4px
        border-radius 4px
        margin 18px 0 40px 0
        line-height 40px
    .dashang
      position absolute
      bottom 0px
      left 0
      background white
      width 100%
      ul
        padding 0 18px
        li
          border-1px(rgba(245,240,240,0.8))
          line-height 50px
          height 50px
    .book_bottom
      height 120px
      width 100%
      position fixed
      background #2e2727
      color white
      bottom 0
      left 0
      z-index 99
      .book_detail
        opacity: 0;
        position absolute
        width 40%
        left 30%
        height 50px
        bottom 130px
        background #2e2727
        display flex
        border-radius 4px
        .fade-enter-active
          transition: all .3s ease
        .fade-leave-active
          transition: all .3s ease
        .fade-enter, .fade-leave-to
          transform: translateX(-10px)
        .book_back
          flex 1
          text-align center
          i
            padding 4px 8px 4px 4px
            font-size 20px
            line-height 50px
            border-right  1px solid whitesmoke
        .book_now
          flex 2
          p
            line-height 25px
            text-align center
            font-size 12px
      .range
        width 90%
        margin 0 auto
    .caozuo
      margin-top 20px
      display flex
      li
        float left
        flex 1
        height 48px
        text-align center
        i
          font-size 22px
          display inline-block
          padding 4px
        span
          display block
          font-size 12px
    .shezhi
      position fixed
      width 100%
      bottom 0
      left 0
      background #2e2727
      p
        text-align center
        color white
        margin-top 15px
        margin-bottom 15px
        font-size 14px
      .light
        margin 20px 18px
        .book_light
          width 100%
          display flex
          color white
          .range
            flex 2.5
          i
            flex 0.3
            font-size 30px
          span
            flex 0.8
            text-align center
            line-height: 30px;
      .font
        height 60px
        margin  0 18px
        border-1px(rgba(245,240,240,0.2))
        color white
        .lt
          border-left 1px solid
        a
          border-radius 4px
        a,span
          line-height 30px
          height 30px
          display inline-block
          text-align center
          width 70px
          margin-top 10px
        a
          border 1px solid #e6dada
          color white
      .background
        width 100%
        display flex
        height 75px
        li
          flex 1
          .background_col1
            background #eece9b
          .background_col2
            background #c4e0c8!important
          .background_col3
            background #473a3a
          .background_col4
            background #141c26
          span
            margin 15px auto
            width 39px
            height 39px
            display block
            border-radius 50%
            background #eece9b
            i
              vertical-align: -11px;
              margin-left: 11px;
    .fenye
      height 35px
      width 8%
      margin 0px auto 12px auto
      .fen
        width: 10px;
        height: 10px;
        display: inline-block;
        border-radius: 100%;
        background: #806c6c;
        opacity: .2;
    .fen2
      color white
      .space
        display flex
        width 95%
        margin 0 auto
        height 50px
        border-1px(rgba(245,240,240,0.2))
        li
          flex 1
          text-align center
          i
            display inline-block
            font-size 48px
            line-height 50px
      .mode
        display flex
        width 95%
        margin 0 auto
        height 80px
        border-1px(rgba(245,240,240,0.2))
        li
          flex 1
          text-align center
          i
            padding 10px
            font-size 28px
            display inline-block
          span
            display block
            font-size 12px
    .book_dan
      background white
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 100%;
      .border_bottom
        padding 0 0 10px 0
        .top
          h2
            height 40px
            line-height 40px
            border-1px(rgba(245,240,240,0.8))
            margin-bottom 10px
          p
            height 25px
            line-height 25px
      .mint-cell
        padding 0 10px 0 10px
      input
        margin 10px auto 10px auto
      .tip
        text-align center
        line-height 30px
        height 30px
        color #ff4c4c
        margin-bottom 20px
    .shareall
      top 0px
    .slide-enter-active
      transition: all .3s ease;
    .slide-leave-active
      transition: all .3s ease;
    .slide-enter
      transform: translateY(100px)

  @media screen and (max-width: 320px)
    .book_read
      .shezhi
        .font
          a,span
            line-height 28px
            height 28px
            display inline-block
            text-align center
            width 60px
            margin-top 10px
</style>


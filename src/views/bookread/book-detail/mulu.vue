<template lang="html">
    <div>
      <d-head title="书名" name="沙海"></d-head>
      <div class="contain">
        <mt-navbar class="page-part" v-model="selected">
          <mt-tab-item id="1">目录</mt-tab-item>
          <mt-tab-item id="2">书签</mt-tab-item>
          <mt-tab-item id="3">看法</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <catalog></catalog>
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <div class="no">
              <i class="icon-mark"></i>
              <p>本书暂时还未添加书签</p>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <div class="no">
              <i class="icon-mark"></i>
              <p>暂无看法，阅读时长按文字添加看法</p>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
.no
  width 100%
  margin 0 auto
  text-align center
  font-size 42px
  margin-top 30%
  color #806c6c
  p
    font-size 16px

</style>

<script type="text/ecmascript-6">
  import detail from '@/components/home-header/detail-header.vue'
  import catalog from '@/views/catalog/catalog.vue'
  export default{
    name: 'page-navbar',
    data () {
      return {
        selected: '1'
      }
    },
    components: {
      'd-head': detail,
      catalog
    }
  }
</script>

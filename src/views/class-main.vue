<template lang="html">
  <div>
    <!--<personal></personal>-->
    <d-head v-if="this.$route.query.bang"></d-head>
    <div v-else>
      <v-head v-if="this.$route.query.class"></v-head>
      <p-head v-else></p-head>
    </div>
    <div class="contain">
      <router-view></router-view>
    </div>
    <v-bottom></v-bottom>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">


</style>

<script type="text/ecmascript-6">
  import head from '../components/home-header/home-header.vue'
  import person from '../components/home-header/person-header.vue'
  import detail from '../components/home-header/detail-header.vue'
  import bottom from '../components/bottom/bottom.vue'
  import personal from './personal/personal.vue'
  export default {
    components: {
      'v-head': head,
      'p-head': person,
      'd-head': detail,
      'v-bottom': bottom,
      personal
    }
  }
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'app',
    data () {
      return {
        homebook: {}
      }
    },
    created () {
      this.$http.get('http://easy-mock.com/mock/598a7ddda1d30433d85a4cd2/example_1502248413615/query')
        .then(function (response) {
          this.homebook = response.data.data
          console.log(response)
          console.log(this.homebook)
        }.bind(this))
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  #app
    position relative
</style>

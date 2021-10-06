<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// import {reqFoodCategorys} from './api'

export default {
  //name: 'App'
  mounted () {
    // const result = await reqFoodCategorys()
    // console.log(result)
    // this.$store.dispatch('getAddress')
    this.getAddress()
    this.getUserInfo()

  },
  methods: {
    ...mapActions(['getAddress', 'getUserInfo'])
  },

  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './common/stylus/mixins.styl' 
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>

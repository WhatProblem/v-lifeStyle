<template>
  <div class="home">
    <search 
      @on-result-click="resultClick" 
      @on-change="getResult" 
      :results="results" 
      v-model="value" 
      position="absolute" 
      auto-scroll-to-top
      top="46px" 
      @on-focus="onFocus" 
      @on-cancel="onCancel" 
      @on-submit="onSubmit" 
      ref="search"></search>
  </div>
</template>
<script>
  import { Search } from 'vux'
  export default {
    name: 'home',
    components: {
      Search
    },
    data() {
      return {

      }
    },
    methods: {
      setFocus() {
        this.$refs.search.setFocus()
      },
      resultClick(item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult(val) {
        console.log('on-change', val)
        this.results = val ? getResult(this.value) : []
      },
      onSubmit() {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      onFocus() {
        console.log('on focus')
      },
      onCancel() {
        console.log('on cancel')
      }
    },
  }

</script>
<style lang="less">
  .home {
    color: #fff;
  }
</style>
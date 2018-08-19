<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import TabBar from './views/tabbar';
  export default {
    name: 'app',
    components: {
      TabBar
    }
  }

</script>

<style lang="less">
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/reset.less';
  body {
    background-color: #fbf9fe;
  }
</style>
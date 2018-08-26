<template>
  <div id="app">
    <div class="main">
      <router-view></router-view>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import TabBar from './views/tabbar';
  export default {
    name: 'app',
    components: {
      TabBar
    },
    mounted() {

    }
  }

</script>

<style lang="less">
  @import '~vux/src/styles/1px.less';
  @import '~vux/src/styles/reset.less';
  body {
    background-color: #fbf9fe;
    .main {
      margin-bottom: 54px;
    }
  }
</style>
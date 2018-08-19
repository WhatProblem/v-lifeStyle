<template>
  <div class="tabbar">
    <tabbar @on-index-change="onIndexChange">
      <tabbar-item selected link="/home">
        <!--<img slot="icon" src="../assets/logo.png">-->
        <i slot="icon" class="myFont ng2-lifeStyle-home" icon-active="red"></i>
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item link="/film">
        <!--<img slot="icon" src="../assets/logo.png">-->
        <i slot="icon" class="myFont ng2-lifeStyle-dianyingzhiye-dianyingbangdianjitai"></i>
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item link="/music">
        <!--<img slot="icon" src="../assets/logo.png">-->
        <i slot="icon" class="myFont ng2-lifeStyle-yinleyule"></i>
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item link="/game">
        <!--<img slot="icon" src="../assets/logo.png">-->
        <i slot="icon" class="myFont ng2-lifeStyle-fenlei-yingxionglianmeng"></i>
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item link="/profile" badge="2">
        <!--<img slot="icon" src="../assets/logo.png">-->
        <i slot="icon" class="myFont ng2-lifeStyle-gerenzhongxin"></i>
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'
  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    },
    data() {
      return {
        
      }
    },
    methods: {
      onIndexChange(newIndex, oldIndex) {
        console.log(newIndex, oldIndex);
      }
    }
  }

</script>
<style lang="less">
  .tabbar {
    width: 100%;
    height: 100%;
    .weui-tabbar {
      background: #363636;
    }
    .weui-tabbar__item {
      color: #ffd04b;
    }
    i.weui-tabbar__icon, .weui-tabbar__icon > i {
      color: #ffd04b;
    }
  }
</style>
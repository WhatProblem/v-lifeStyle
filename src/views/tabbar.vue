<template>
  <div class="tabbar">
    <tabbar @on-index-change="onIndexChange">
      <tabbar-item :selected="(curIndex==='/home'|| curIndex==='')?true:false" link="/home">
        <i slot="icon" class="myFont ng2-lifeStyle-home" icon-active="red"></i>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :selected="curIndex==='/film'?true:false" link="/film">
        <i slot="icon" class="myFont ng2-lifeStyle-dianyingzhiye-dianyingbangdianjitai"></i>
        <span slot="label">视频</span>
      </tabbar-item>
      <tabbar-item :selected="curIndex==='/music'?true:false" link="/music">
        <i slot="icon" class="myFont ng2-lifeStyle-yinleyule"></i>
        <span slot="label">音乐</span>
      </tabbar-item>
      <tabbar-item :selected="curIndex==='/game'?true:false" link="/game">
        <i slot="icon" class="myFont ng2-lifeStyle-fenlei-yingxionglianmeng"></i>
        <span slot="label">游戏</span>
      </tabbar-item>
      <tabbar-item :selected="curIndex==='/profile'?true:false" link="/profile" badge="2">
        <i slot="icon" class="myFont ng2-lifeStyle-gerenzhongxin"></i>
        <span slot="label">我的</span>
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
      curIndex: ''
    }
  },
  mounted() {

  },
  methods: {
    onIndexChange(newIndex, oldIndex) {
      // console.log(newIndex, oldIndex);
    }
  },
  watch: {
    $route(to, from) {
      this.curIndex = to.path;
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
  i.weui-tabbar__icon,
  .weui-tabbar__icon>i {
    color: #ffd04b;
  }
}
</style>